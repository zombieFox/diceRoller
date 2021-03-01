import './index.css';
import { node } from '../../utilities/node';
import { icon } from '../icon';
import { Button } from '../button';

export const Dropdown = function({ text = false, iconName = false, content = false } = {}) {
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

  this.node = {
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
    this.node.dropdown.appendChild(this.node.toggle.button);
  };

  this.render.node.panel = () => {
    if (content) {
      this.node.panel.appendChild(content);
    };
  };

  this.render.node.dropdown = () => {
    this.node.dropdown.appendChild(this.node.toggle.button);
  };

  this.render.dropdown = () => {
    if (this.state.open) {
      this.node.dropdown.classList.add('is__dropdown-open');
      this.node.dropdown.classList.remove('is__dropdown-closed');
      this.node.toggle.active();
    } else {
      this.node.dropdown.classList.add('is__dropdown-closed');
      this.node.dropdown.classList.remove('is__dropdown-open');
      this.node.toggle.deactive();
    };
  };

  this.render.panel = () => {
    const remove = () => {
      if (!this.state.open) {
        this.node.panel.remove();
        this.node.panel.removeEventListener('animationend', remove);
      };
    };

    if (this.state.open) {
      this.node.panel.removeEventListener('animationend', remove);
      this.node.app.appendChild(this.node.panel);
      const toggleBox = this.node.toggle.button.getBoundingClientRect();
      const panelBox = this.node.panel.getBoundingClientRect();
      const fontSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--font-size'), 10);
      this.node.panel.style.top = `${toggleBox.top + toggleBox.height + fontSize}px`;
      this.node.panel.style.left = `${toggleBox.right - panelBox.width}px`;
      this.node.panel.classList.remove('is__dropdown-closed');
      this.node.panel.classList.add('is__dropdown-open');
    } else {
      this.node.panel.addEventListener('animationend', remove);
      this.node.panel.classList.remove('is__dropdown-open');
      this.node.panel.classList.add('is__dropdown-closed');
    };
  };

  this.render.node.toggle();

  this.render.node.panel();

  this.render.node.dropdown();

  this.render.dropdown();

  this.dropdown = this.node.dropdown;
};
