import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { formula } from '../formula';
import { result } from '../result';
import { theme } from '../theme';
import { saved } from '../saved';
import { ControlRange } from '../form';
import { Button } from '../button';
import { Dropdown } from '../dropdown';

export const toolbar = {};

toolbar.element = node('div|class:toolbar');

toolbar.render = () => {
  const clearResultHistory = new Button({
    text: 'Clear history',
    ring: true,
    type: 'link',
    size: 'small',
    func: () => {

      result.history.clear();
      data.state.save();
      result.clear();

    }
  });

  const clearFormula = new Button({
    text: 'Clear formula',
    ring: true,
    type: 'link',
    size: 'small',
    func: () => {

      formula.reset();
      data.state.save();
      formula.update();

    }
  });

  const themePrimaryH = new ControlRange({
    id: 'theme-primary-h',
    label: 'Primary Hue',
    value: theme.state.color.primary.h,
    min: 1,
    max: 360,
    action: () => {

      theme.state.color.primary.h = parseInt(themePrimaryH.range.value, 10);
      data.state.save();
      theme.variable.render();

    }
  });

  const themeSecondaryH = new ControlRange({
    id: 'theme-secondary-h',
    label: 'Secondary Hue',
    value: theme.state.color.secondary.h,
    min: 1,
    max: 360,
    action: () => {

      theme.state.color.secondary.h = parseInt(themeSecondaryH.range.value, 10);
      data.state.save();
      theme.variable.render();

    }
  });

  const themeDropdown = new Dropdown({
    text: 'Theme',
    iconName: 'chevronDown',
    content: node('div', [
      themePrimaryH.wrap,
      themeSecondaryH.wrap
    ])
  });

  toolbar.element.appendChild(clearFormula.button);

  toolbar.element.appendChild(clearResultHistory.button);

  toolbar.element.appendChild(theme.toggle.render());

  toolbar.element.appendChild(themeDropdown.dropdown);

  return toolbar.element;
};
