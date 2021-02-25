import { node } from '../../utilities/node';
import { data } from '../data';

export const modifier = {};

modifier.render = (state) => {
  const formulaModifier = node('div|class:formula__item formula__modifier');

  const max = 999;

  const mid = 0;

  const min = max * -1;

  let delayUpdate = null;

  const validateValue = (oldValue) => {
    let newValue = parseInt(oldValue, 10);

    if (isNaN(oldValue) || oldValue === '') {
      newValue = mid;
    };

    if (oldValue > max) {
      newValue = max;
    };

    if (oldValue < min) {
      newValue = min;
    };

    clearTimeout(delayUpdate);

    delayUpdate = window.setTimeout(function() {
      input.value = prefixValue(state.modifier);
    }, 1500);

    return newValue;
  };

  const prefixValue = (oldValue) => {
    if (oldValue >= mid) {
      return '+' + oldValue;
    } else {
      return oldValue;
    };
  };

  const input = node('input|class:formula__modifier-input,type:text,tabindex:1');

  input.value = prefixValue(state.modifier);

  input.addEventListener('input', () => {
    state.modifier = validateValue(input.value);

    data.state.save();
  });

  input.addEventListener('blur', (event) => {
    input.value = prefixValue(validateValue(state.modifier));
  });

  let currentValue = null;

  input.addEventListener('touchstart', (event) => {
    currentValue = parseInt(input.value, 10);
    input.focus();
  });

  input.addEventListener('touchend', (event) => {
    currentValue = null;
    input.blur();
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
      state.modifier = state.modifier + 1;
      input.value = prefixValue(state.modifier);
    };

    // arrow down
    if (event.keyCode === 40) {
      state.modifier = state.modifier - 1;
      input.value = prefixValue(state.modifier);
    };

    data.state.save();
  });

  formulaModifier.appendChild(input);

  return formulaModifier;
};
