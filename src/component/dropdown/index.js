import './index.css';
import { node } from '../../utilities/node';
import { icon } from '../icon';
import { Button } from '../button';

export const Dropdown = function({ text = false, iconName = false, content = false, position = false } = {}) {
  this.state = {
    open: false
  };

  this.state.toggle = () => {
    if (this.state.open) {
      this.state.open = false;
    } else {
      this.state.open = true;
    };
  };

  this.element = {
    app: document.querySelector('.app'),
    dropdown: node('div|class:dropdown'),
    panel: node('div|class:dropdown__panel'),
    toggle: new Button({
      text: text || false,
      ring: true,
      type: 'link',
      size: 'small',
      classList: ['dropdown__toggle'],
      iconName: iconName || false,
      func: () => {
        this.state.toggle();
        this.render.dropdown();
        this.render.panel();
      }
    })
  };

  this.render = {};

  this.render.node = {};

  this.render.node.toggle = () => {
    this.element.dropdown.appendChild(this.element.toggle.button);
  };

  this.render.node.panel = () => {
    if (content) {
      this.element.panel.appendChild(content);
    };
  };

  this.render.node.dropdown = () => {
    this.element.dropdown.appendChild(this.element.toggle.button);
  };

  this.render.dropdown = () => {
    if (this.state.open) {
      this.element.dropdown.classList.add('is__dropdown-open');
      this.element.dropdown.classList.remove('is__dropdown-closed');
      this.element.toggle.active();
    } else {
      this.element.dropdown.classList.add('is__dropdown-closed');
      this.element.dropdown.classList.remove('is__dropdown-open');
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

      const fontSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--font-size'), 10);

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

  this.render.node.toggle();

  this.render.node.panel();

  this.render.node.dropdown();

  this.render.dropdown();

  this.dropdown = this.element.dropdown;
};
