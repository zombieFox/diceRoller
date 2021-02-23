import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
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

  toolbar.element.appendChild(clearResultHistory.button);

  toolbar.element.appendChild(theme.toggle.render());

  return toolbar.element;
};
