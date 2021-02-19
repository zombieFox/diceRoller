import { node } from '../../utilities/node';
import { dice } from '../dice';

export const modifier = {};

modifier.render = (state) => {
  const formulaModifier = node('div|class:formula__item formula__modifier');

  const input = node(`input|class:formula__modifier-input,type:text,tabindex:1`);

  const max = 999;

  const min = -999;

  let delayUpdate = null;

  const validateValue = (oldValue) => {
    let newValue = oldValue;

    if (isNaN(oldValue)) {
      newValue = 0;
    };

    if (oldValue > max) {
      newValue = max;
    };

    if (oldValue < min) {
      newValue = min;
    };

    if (isNaN(oldValue) || oldValue > max || oldValue < min) {
      clearTimeout(delayUpdate);

      delayUpdate = window.setTimeout(function() {
        input.value = prefixValue(state.modifier);
      }, 1500);
    };

    return newValue;
  };

  const prefixValue = (oldValue) => {
    if (oldValue >= 0) {
      return '+' + oldValue;
    } else {
      return oldValue;
    };
  };

  input.value = prefixValue(state.modifier);

  input.addEventListener('input', () => {
    let value = parseInt(input.value, 10);

    state.modifier = validateValue(value);
  });

  input.addEventListener('blur', (event) => {
    input.value = prefixValue(state.modifier);
  });

  let currentValue = null;

  input.addEventListener('touchstart', (event) => {
    currentValue = parseInt(input.value, 10);
  });

  input.addEventListener('touchend', (event) => {
    currentValue = null;
  });

  input.addEventListener('touchmove', (event) => {
    event.preventDefault();

    let value = currentValue + (Math.round((event.changedTouches[0].clientY - event.target.getBoundingClientRect().top) / 25) * -1);

    state.modifier = validateValue(value);

    input.value = prefixValue(state.modifier);
  });

  input.addEventListener('keydown', (event) => {
    // arrow up
    if (event.keyCode === 38) {
      state.modifier = validateValue(state.modifier + 1);
      input.value = prefixValue(state.modifier);
    };
    // arrow down
    if (event.keyCode === 40) {
      state.modifier = validateValue(state.modifier - 1);
      input.value = prefixValue(state.modifier);
    };
  });

  formulaModifier.appendChild(input);

  return formulaModifier;
};
