import './index.css';
import { node } from '../../utilities/node';
import { icon } from '../icon';

export const Button = function({ text = false, type = false, round = false, block = false, size = false, style = [], ring = false, title = false, classList = [], iconName = false, func = false, sr = false } = {}) {
  this.button = node('button|class:button,type:button');

  if (text) {
    const buttonText = node('span:' + text + '|class:button__text');

    this.button.appendChild(buttonText);
  };

  if (sr) {
    const buttonSr = node('span:' + sr + '|class:sr__only');

    this.button.appendChild(buttonSr);
  };

  switch (type) {
    case 'primary':
      this.button.classList.add('button__primary');
      break;

    case 'secondary':
      this.button.classList.add('button__secondary');
      break;

    case 'success':
      this.button.classList.add('button__success');
      break;

    case 'danger':
      this.button.classList.add('button__danger');
      break;

    case 'light':
      this.button.classList.add('button__light');
      break;

    case 'link':
      this.button.classList.add('button__link');
      break;

    default:
      this.button.classList.add('button__secondary');
      break;
  };

  if (iconName) {
    const buttonIcon = node('span|class:button__icon', [
      icon.render(iconName)
    ]);

    this.button.appendChild(buttonIcon);
  };

  if (ring) {
    this.button.classList.add('button__ring');
  };

  if (block) {
    this.button.classList.add('button__block');
  };

  if (round) {
    this.button.classList.add('button__round');
  };

  switch (size) {
    case 'small':
      this.button.classList.add('button__small');
      break;

    case 'large':
      this.button.classList.add('button__large');
      break;
  };

  if (title) {
    this.button.setAttribute('title', title);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      this.button.classList.add(item);
    });
  };

  if (func) {
    this.button.addEventListener('click', (event) => {
      func();
    });
  };

  this.disable = () => {
    this.button.disabled = true;
  };

  this.enable = () => {
    this.button.disabled = false;
  };

  this.deactive = () => {
    this.button.classList.remove('button__active');
  };

  this.active = () => {
    this.button.classList.add('button__active');
  };
};
