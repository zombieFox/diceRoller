import './index.css';
import { node } from '../../utilities/node';
import { convertColor } from '../../utilities/convertColor';
import { data } from '../data';
import { Button } from '../button';
import { form, ControlRange } from '../form';

export const theme = {};

theme.default = {
  style: 'dark',
  color: {
    range: {
      primary: { h: 210, s: 75 },
      secondary: { h: 225, s: 30 },
      success: { h: 150, s: 75 },
      danger: { h: 345, s: 75 }
    },
    lightness: {
      contrast: {
        current: 8,
        min: 0,
        max: 40
      },
      shades: 9,
      start: null,
      end: null
    }
  }
};

theme.default.color.lightness.start = theme.default.color.lightness.contrast.current;

theme.default.color.lightness.end = 100 - theme.default.color.lightness.contrast.current;

theme.state = JSON.parse(JSON.stringify(theme.default));

theme.variable = {};

theme.variable.render = () => {
  const html = document.querySelector('html');

  let shades = (theme.state.color.lightness.end - theme.state.color.lightness.start) / (theme.state.color.lightness.shades - 1);

  for (var type in theme.state.color.range) {
    for (var i = 0; i < theme.state.color.lightness.shades; i++) {
      let hsl = JSON.parse(JSON.stringify(theme.state.color.range[type]));

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
      html.classList.add('is__theme-light');
      html.classList.remove('is__theme-dark');
      break;

    case 'dark':
      html.classList.remove('is__theme-light');
      html.classList.add('is__theme-dark');
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
    node('span|class:theme__style-text button__text', [
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

  const themePrimaryS = new ControlRange({
    id: 'theme-primary-s',
    label: 'Saturation',
    value: theme.state.color.range.primary.s,
    min: 0,
    max: 100,
    action: () => {
      theme.state.color.range.primary.s = parseInt(themePrimaryS.range.value, 10);

      data.state.save();

      theme.variable.render();
    }
  });

  const themeSecondaryH = new ControlRange({
    id: 'theme-secondary-h',
    label: 'Color',
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

  const themeSecondaryS = new ControlRange({
    id: 'theme-secondary-s',
    label: 'Saturation',
    value: theme.state.color.range.secondary.s,
    min: 0,
    max: 100,
    action: () => {
      theme.state.color.range.secondary.s = parseInt(themeSecondaryS.range.value, 10);

      data.state.save();

      theme.variable.render();
    }
  });

  const contrast = new ControlRange({
    id: 'theme-contrast',
    label: 'Contrast',
    value: theme.state.color.lightness.contrast.max - theme.state.color.lightness.contrast.current,
    min: theme.state.color.lightness.contrast.min,
    max: theme.state.color.lightness.contrast.max,
    reverse: true,
    action: () => {
      const newValue = theme.state.color.lightness.contrast.max - parseInt(contrast.range.value, 10);

      theme.state.color.lightness.contrast.current = newValue;

      theme.state.color.lightness.start = newValue;

      theme.state.color.lightness.end = 100 - newValue;

      data.state.save();

      theme.variable.render();
    }
  });

  const reset = new Button({
    text: 'Reset theme',
    ring: true,
    type: 'primary',
    func: () => {
      theme.state = JSON.parse(JSON.stringify(theme.default));

      data.state.save();

      theme.variable.render();

      theme.style.toggle(theme.state.style);

      theme.style.render();

      theme.toggle.update();

      themePrimaryH.update(theme.state.color.range.primary.h);

      themePrimaryS.update(theme.state.color.range.primary.s);

      themeSecondaryH.update(theme.state.color.range.secondary.h);

      themeSecondaryS.update(theme.state.color.range.secondary.s);

      contrast.update(theme.state.color.lightness.contrast.max - theme.state.color.lightness.contrast.current);
    }
  });

  return node('form|class:theme__control', [
    form.fieldset([
      theme.toggle.render()
    ]),
    form.fieldset([
      themeSecondaryH.group(),
      themeSecondaryS.group()
    ]),
    form.fieldset([
      themePrimaryH.group(),
      themePrimaryS.group()
    ]),
    form.fieldset([
      contrast.group()
    ]),
    form.fieldset([
      reset.button
    ])
  ])
};
