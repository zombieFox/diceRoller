import { node } from '../../utilities/node';
import { data } from '../data';

export const count = {};

count.render = (state, id) => {
  const formulaCount = node('div|class:formula__item formula__count');

  const max = 100;

  const min = 1;

  let delay = null;

  const validateValue = (oldValue) => {
    let newValue = parseInt(oldValue, 10);

    if (isNaN(oldValue) || oldValue === '') {
      newValue = min;
    };

    if (oldValue > max) {
      newValue = max;
    };

    if (oldValue < min) {
      newValue = min;
    };

    clearTimeout(delay);

    delay = window.setTimeout(function() {
      input.value = state.count;
    }, 1500);

    return newValue;
  };

  const label = node(`label:Dice count|class:sr__only,for:formula__count-input-${id}`);

  const input = node(`input|class:formula__count-input,id:formula__count-input-${id},type:number,value:${state.count},min:${min},max:${max}`);

  input.addEventListener('input', () => {
    state.count = validateValue(input.value);

    data.state.save();
  });

  input.addEventListener('blur', (event) => {
    input.value = state.count;
  });

  let currentValue = null;

  input.addEventListener('touchstart', (event) => {
    currentValue = parseInt(input.value, 10);
    input.focus();
  }, { passive: true });

  input.addEventListener('touchend', (event) => {
    currentValue = null;
    input.blur();
  }, { passive: true });

  input.addEventListener('touchmove', (event) => {
    event.preventDefault();

    let value = currentValue + (Math.round((event.changedTouches[0].clientY - event.target.getBoundingClientRect().top) / 25) * -1);

    state.count = validateValue(value);

    input.value = state.count;

    data.state.save();
  }, { passive: true });

  formulaCount.appendChild(label);

  formulaCount.appendChild(input);

  return formulaCount;
};
