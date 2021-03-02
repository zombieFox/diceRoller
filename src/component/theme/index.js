import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { Button } from '../button';

export const theme = {};

theme.state = {};

theme.state = {
  style: 'dark',
  color: {
    primary: { h: 210, s: 80, l: 45 },
    secondary: { h: 215, s: 20, l: 50 },
    success: { h: 130, s: 80, l: 45 },
    danger: { h: 340, s: 80, l: 45 }
  }
};

theme.variable = {};

theme.variable.render = () => {
  const html = document.querySelector('html');

  for (var type in theme.state.color) {
    for (var colorValue in theme.state.color[type]) {

      html.style.setProperty(`--theme-${type}-${colorValue}`, theme.state.color[type][colorValue]);

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

theme.toggle.render = () => {
  const themeStyleInput = node('input|type:checkbox,class:theme__style-input,id:theme__style-input');

  const themeStyleLabel = node('label|class:theme__style-label button button__link button__ring,for:theme__style-input,for:theme__style-input', [
    node('span|class:theme__style-icon'),
    node('span|class:theme__style-text', [
      node('span:Light|class:theme__style-text-light'),
      node('span:Dark|class:theme__style-text-dark')
    ])
  ]);

  const themeToggle = node('div|class:theme__style-toggle', [
    themeStyleInput,
    themeStyleLabel
  ]);

  switch (theme.state.style) {
    case 'light':
      themeStyleInput.checked = false;
      break;

    case 'dark':
      themeStyleInput.checked = true;
      break;
  };

  themeStyleInput.addEventListener('change', (event) => {
    if (themeStyleInput.checked) {
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
      document.querySelector('.theme__style-input').checked = false;
      break;

    case 'dark':
      document.querySelector('.theme__style-input').checked = true;
      break;
  };
};
