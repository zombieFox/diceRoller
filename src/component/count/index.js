import { node } from '../../utilities/node';
import { data } from '../data';

export const count = {};

count.render = (state) => {
  const formulaCount = node('div|class:formula__item formula__count');

  const max = 100;

  const min = 1;

  const input = node(`input|class:formula__count-input,type:number,value:${state.count},tabindex:1,min:${min},max:${max}`);

  let delay = null;

  const validateValue = (oldValue) => {
    let newValue = oldValue;

    if (isNaN(oldValue)) {
      newValue = min;
    };

    if (oldValue > max) {
      newValue = max;
    };

    if (oldValue < min) {
      newValue = min;
    };

    if (isNaN(oldValue) || oldValue > max || oldValue < min) {
      clearTimeout(delay);

      delay = window.setTimeout(function() {
        input.value = state.count;
      }, 1500);
    };

    return newValue;
  };

  input.addEventListener('input', () => {
    let value = parseInt(input.value, 10);

    if (value < min) {
      input.value = min;
    };

    state.count = validateValue(value);

    data.state.save();
  });

  input.addEventListener('blur', (event) => {
    input.value = state.count;
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

    state.count = validateValue(value);

    input.value = state.count;
  });

  formulaCount.appendChild(input);

  return formulaCount;
};
