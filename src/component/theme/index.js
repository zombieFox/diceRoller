import './index.css';
import { node } from '../../utilities/node';

export const theme = {};

theme.state = {};

theme.state.current = {
  style: 'dark'
};

theme.style = {};

theme.style.toggle = (state) => {
  if (state && (state === 'dark' || state === 'light')) {
    theme.state.current.style = state;
  } else {
    switch (theme.state.current.style) {
      case 'light':
        theme.state.current.style = 'dark';
        break;

      case 'dark':
        theme.state.current.style = 'light';
        break;
    };
  };
};

theme.style.render = () => {
  const html = document.querySelector('html');

  switch (theme.state.current.style) {
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
  window.addEventListener('keydown', function(event) {
    // ctrl+alt+d
    if (event.ctrlKey && event.altKey && event.keyCode == 68) {
      theme.style.toggle();
      theme.style.render();
      theme.toggle.update();
    };
  }, false);
};

theme.toggle = {};

theme.toggle.render = () => {
  const themeStyleInput = node('input|type:checkbox,class:theme__style-input,id:theme__style-input,tabindex:1');
  const themeStyleLabel = node('label|class:theme__style-label,for:theme__style-input', [
    node('span:Dark|class:theme__style-text theme__style-text-dark'),
    node('span|class:theme__style-icon'),
    node('span:Light|class:theme__style-text theme__style-text-light')
  ]);

  const themeToggle = node('div|class:theme__style-toggle', [
    themeStyleInput,
    themeStyleLabel
  ]);

  switch (theme.state.current.style) {
    case 'light':
      themeStyleInput.checked = false;
      break;

    case 'dark':
      themeStyleInput.checked = true;
      break;
  };

  themeStyleInput.addEventListener('change', function(event) {
    if (this.checked) {
      theme.style.toggle('dark');
    } else {
      theme.style.toggle('light');
    };

    theme.style.render();
  });

  return themeToggle;
};

theme.toggle.update = () => {
  switch (theme.state.current.style) {
    case 'light':
      document.querySelector('.theme__style-input').checked = false;
      break;

    case 'dark':
      document.querySelector('.theme__style-input').checked = true;
      break;
  };
};
