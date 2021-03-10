import './index.css';
import { node } from '../../utilities/node';
import { convertColor } from '../../utilities/convertColor';
import { data } from '../data';
import { Button } from '../button';
import { form, ControlRange } from '../form';

export const theme = {};

theme.state = {};

theme.state = {
  style: 'dark',
  color: {
    range: {
      primary: { h: 210, s: 75 },
      secondary: { h: 225, s: 30 },
      success: { h: 150, s: 75 },
      danger: { h: 345, s: 75 }
    },
    lightness: {
      shades: 9,
      start: 8,
      end: 92
    }
  }
};

theme.variable = {};

theme.variable.render = () => {
  const html = document.querySelector('html');

  let shades = (theme.state.color.lightness.end - theme.state.color.lightness.start) / (theme.state.color.lightness.shades - 1);

  for (var type in theme.state.color.range) {
    for (var i = 0; i < theme.state.color.lightness.shades; i++) {
      let hsl = theme.state.color.range[type];

      hsl.l = (shades * i) + theme.state.color.lightness.start;

      let rgb = convertColor.hsl.rgb(hsl);

      for (var key in rgb) {
        html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, Math.round(rgb[key]));
      };

      for (var key in hsl) {
        html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, Math.round(hsl[key]));
      };
    };
  };
};

theme.style = {};

theme.style.toggle = (state) => {
  if (state && (state === 'dark' || state === 'light')) {
    theme.state.style = state;
  } else {
    switch (theme.state.style) {
      case 'light':
        theme.state.style = 'dark';
        break;

      case 'dark':
        theme.state.style = 'light';
        break;
    };
  };
};

theme.style.render = () => {
  const html = document.querySelector('html');

  switch (theme.state.style) {
    case 'light':
      html.classList.add('is-theme-light');
      html.classList.remove('is-theme-dark');
      break;

    case 'dark':
      html.classList.remove('is-theme-light');
      html.classList.add('is-theme-dark');
      break;
  };
};

theme.keyboard = {};

theme.keyboard.bind = () => {
  window.addEventListener('keydown', (event) => {
    // ctrl+alt+d
    if (event.ctrlKey && event.altKey && event.keyCode == 68) {
      theme.style.toggle();
      data.state.save();
      theme.style.render();
      theme.toggle.update();
    };
  });
};

theme.toggle = {};

theme.toggle.element = {
  input: node('input|type:checkbox,class:theme__style-input,id:theme__style-input')
};

theme.toggle.render = () => {
  const themeStyleLabel = node('label|class:theme__style-label button button__light button__ring,for:theme__style-input,for:theme__style-input', [
    node('span|class:theme__style-icon'),
    node('span|class:theme__style-text', [
      node('span:Light mode|class:theme__style-text-light'),
      node('span:Dark mode|class:theme__style-text-dark')
    ])
  ]);

  const themeToggle = node('div|class:theme__style-toggle', [
    theme.toggle.element.input,
    themeStyleLabel
  ]);

  switch (theme.state.style) {
    case 'light':
      theme.toggle.element.input.checked = false;
      break;

    case 'dark':
      theme.toggle.element.input.checked = true;
      break;
  };

  theme.toggle.element.input.addEventListener('change', (event) => {
    if (theme.toggle.element.input.checked) {
      theme.style.toggle('dark');
      theme.state.style = 'dark';
    } else {
      theme.style.toggle('light');
      theme.state.style = 'light';
    };

    data.state.save();

    theme.style.render();
  });

  return themeToggle;
};

theme.toggle.update = () => {
  switch (theme.state.style) {
    case 'light':
      theme.toggle.element.input.checked = false;
      break;

    case 'dark':
      theme.toggle.element.input.checked = true;
      break;
  };
};

theme.control = {};

theme.control.render = () => {
  const themePrimaryH = new ControlRange({
    id: 'theme-primary-h',
    label: 'Accent',
    value: theme.state.color.range.primary.h,
    min: 1,
    max: 360,
    classList: ['input__hue-spectrum'],
    action: () => {

      theme.state.color.range.primary.h = parseInt(themePrimaryH.range.value, 10);
      data.state.save();
      theme.variable.render();

    }
  });

  const themeSecondaryH = new ControlRange({
    id: 'theme-secondary-h',
    label: 'Colour',
    value: theme.state.color.range.secondary.h,
    min: 1,
    max: 360,
    classList: ['input__hue-spectrum'],
    action: () => {

      theme.state.color.range.secondary.h = parseInt(themeSecondaryH.range.value, 10);
      data.state.save();
      theme.variable.render();

    }
  });

  return node('form|class:theme__control', [
    form.fieldset([
      theme.toggle.render()
    ]),
    form.fieldset([
      themeSecondaryH.wrap,
      themePrimaryH.wrap
    ])
  ])
};
