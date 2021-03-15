import './index.css';
import { node } from '../../utilities/node';
import { icon } from '../icon';
import { Button } from '../button';

export const Dropdown = function({ text = false, iconName = false, iconRotate = false, content = false, position = false, buttonSize = false } = {}) {
  this.state = {
    open: false
  };

  this.element = {
    app: document.querySelector('.app'),
    panel: node('div|class:dropdown__panel'),
    toggle: new Button({
      text: text || false,
      ring: true,
      type: 'link',
      size: buttonSize,
      classList: ['dropdown__toggle'],
      iconName: iconName || false,
      func: () => { this.toggle(); }
    })
  };

  this.render = {};

  this.render.content = () => {
    if (content) {
      this.element.panel.appendChild(content);
    };
  };

  this.render.toggle = () => {
    if (this.state.open) {
      if (iconRotate) {
        this.element.toggle.button.classList.add('is__dropdown-open');
      };
      this.element.toggle.active();
    } else {
      if (iconRotate) {
        this.element.toggle.button.classList.remove('is__dropdown-open');
      };
      this.element.toggle.deactive();
    };
  };

  this.render.panel = () => {
    const remove = () => {
      if (!this.state.open) {
        this.element.panel.remove();

        this.element.panel.removeEventListener('animationend', remove);
      };
    };

    if (this.state.open) {
      this.element.panel.removeEventListener('animationend', remove);

      this.element.app.appendChild(this.element.panel);

      const toggleBox = this.element.toggle.button.getBoundingClientRect();

      const panelBox = this.element.panel.getBoundingClientRect();

      const fontSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--base-font-size'), 10);

      switch (position) {
        case 'topLeft':
          this.element.panel.style.bottom = `${window.innerHeight - toggleBox.top + fontSize}px`;
          this.element.panel.style.left = `${toggleBox.left}px`;
          break;

        case 'topRight':
          this.element.panel.style.bottom = `${window.innerHeight - toggleBox.top + fontSize}px`;
          this.element.panel.style.right = `${window.innerWidth - toggleBox.right}px`;
          break;

        case 'bottomLeft':
          this.element.panel.style.top = `${toggleBox.top + toggleBox.height + fontSize}px`;
          this.element.panel.style.left = `${toggleBox.left}px`;
          break;

        case 'bottomRight':
          this.element.panel.style.top = `${toggleBox.top + toggleBox.height + fontSize}px`;
          this.element.panel.style.right = `${window.innerWidth - toggleBox.right}px`;
          break;

        case 'leftTop':
          this.element.panel.style.top = `${toggleBox.top}px`;
          this.element.panel.style.right = `${window.innerWidth - toggleBox.left + fontSize}px`;
          break;

        case 'leftBottom':
          this.element.panel.style.bottom = `${window.innerHeight - toggleBox.bottom}px`;
          this.element.panel.style.right = `${window.innerWidth - toggleBox.left + fontSize}px`;
          break;

        case 'rightTop':
          this.element.panel.style.top = `${toggleBox.top}px`;
          this.element.panel.style.left = `${toggleBox.right + fontSize}px`;
          break;

        case 'rightBottom':
          this.element.panel.style.bottom = `${window.innerHeight - toggleBox.bottom}px`;
          this.element.panel.style.left = `${toggleBox.right + fontSize}px`;
          break;

        default:
          this.element.panel.style.top = `${toggleBox.top + toggleBox.height + fontSize}px`;
          this.element.panel.style.left = `${toggleBox.left}px`;
          break;
      };

      this.element.panel.classList.remove('is__dropdown-closed');

      this.element.panel.classList.add('is__dropdown-open');
    } else {
      this.element.panel.addEventListener('animationend', remove);

      this.element.panel.classList.remove('is__dropdown-open');

      this.element.panel.classList.add('is__dropdown-closed');
    };
  };

  this.open = () => {
    this.state.open = true;
    this.render.toggle();
    this.render.panel();
  };

  this.close = () => {
    this.state.open = false;
    this.render.toggle();
    this.render.panel();
  };

  this.toggle = (state) => {
    if (state && state === 'open') {
      this.open();
    } else if (state && state === 'close') {
      this.close();
    } else {
      if (this.state.open) {
        this.close();
      } else {
        this.open();
      };
    };
  };

  this.render.content();

  this.button = this.element.toggle.button;

  this.panel = this.element.panel;
};
