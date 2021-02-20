import { node } from '../../utilities/node';
import { dice } from '../dice';
import { icon } from '../icon';

export const size = {};

size.availableDice = [2, 3, 4, 6, 8, 10, 12, 20, 100];

size.render = (state) => {
  const formulaSize = node('div|class:formula__item formula__size');

  const display = node('div|class:formula__size-display');

  const formulaSizeText = node('div|class:formula__size-text');

  const formulaSizeIcon = node('div|class:formula__size-icon', [
    icon.render('chevronDown')
  ]);

  display.appendChild(formulaSizeText);

  display.appendChild(formulaSizeIcon);

  const select = node('select|class:formula__size-select,tabindex:1');

  select.addEventListener('change', () => {
    state.size = select.selectedOptions[0].size;

    formulaSizeText.textContent = 'd' + state.size;
  });

  size.availableDice.forEach((item, i) => {
    const option = node(`option:d${item}|value:${item}`);

    option.size = item;

    if (state.size === item) {
      option.selected = true;

      formulaSizeText.textContent = 'd' + item;
    };

    select.appendChild(option);
  });

  let currentIndex = null;

  select.addEventListener('touchstart', (event) => {
    currentIndex = select.selectedIndex;
  });

  select.addEventListener('touchend', (event) => {
    currentIndex = null;
  });

  select.addEventListener('touchmove', (event) => {
    event.preventDefault();

    let newIndex = currentIndex + (Math.round((event.changedTouches[0].clientY - event.target.getBoundingClientRect().top) / 25) * -1);

    if (newIndex < 0) {
      newIndex = 0;
    };

    if (newIndex > size.availableDice.length - 1) {
      newIndex = size.availableDice.length - 1;
    };

    state.size = size.availableDice[newIndex];

    select.selectedIndex = newIndex;

    formulaSizeText.textContent = 'd' + state.size;
  });

  formulaSize.appendChild(select);

  formulaSize.appendChild(display);

  return formulaSize;
};
