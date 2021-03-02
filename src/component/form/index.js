import './index.css';
import { node } from '../../utilities/node';
import { Button } from '../button';

const form = {};

form.form = (children) => {
  return node('form', children);
};

form.wrap = (children) => {
  return node('div|class:form__wrap', children);
};

form.fieldset = (children) => {
  return node('fieldset', children);
};

form.label = ({ id = false, text = false, icon = false, classList = [] } = {}) => {
  const label = node('label');

  if (id) {
    label.setAttribute('for', id);
  };

  if (text) {
    label.appendChild(node(`span:${text}|class:label__text`));
  };

  if (icon) {
    label.prepend(node('span|class:label__icon'));
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      label.classList.add(item);
    });
  };

  return label;
};

form.range = ({ id = false, min = false, max = false, value = false, classList = [], action = false } = {}) => {
  const input = node('input|type:range');

  if (id) {
    input.setAttribute('id', id);
  };

  if (min || min === 0) {
    input.setAttribute('min', min);
  };

  if (max || max === 0) {
    input.setAttribute('max', max);
  };

  if (value || value === 0) {
    input.setAttribute('value', value);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      input.classList.add(item);
    });
  };

  if (action) {
    input.addEventListener('input', function(event) {
      action();
    });
  };

  return input;
};

const ControlRange = function({ id = 'name', label = 'Name', value = false, defaultValue = false, min = false, max = false, action = false } = {}) {
  this.label = form.label({
    id: id,
    text: label
  });

  this.range = form.range({
    id: id,
    min: min,
    max: max,
    value: value,
    action: action
  });

  this.wrap = form.wrap([
    this.label,
    this.range
  ]);

  this.disable = () => {
    this.label.classList.add('disabled');
    this.range.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.range.disabled = false;
  };
};

export { form, ControlRange };
