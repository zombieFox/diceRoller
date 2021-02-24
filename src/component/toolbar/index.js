import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { formula } from '../formula';
import { result } from '../result';
import { theme } from '../theme';
import { saved } from '../saved';
import { Button } from '../button';

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

  toolbar.element.appendChild(clearFormula.button);

  toolbar.element.appendChild(clearResultHistory.button);

  toolbar.element.appendChild(theme.toggle.render());

  return toolbar.element;
};
