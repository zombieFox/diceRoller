import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { formula } from '../formula';
import { result } from '../result';
import { theme } from '../theme';
import { saved } from '../saved';
import { form, ControlRange } from '../form';
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

  const themeDropdown = new Dropdown({
    text: 'Theme',
    iconName: 'chevronDown',
    position: 'bottomRight',
    content: theme.control.render()
  });

  toolbar.element.appendChild(clearFormula.button);

  toolbar.element.appendChild(clearResultHistory.button);

  toolbar.element.appendChild(themeDropdown.button);

  return toolbar.element;
};
