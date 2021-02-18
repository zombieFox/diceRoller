import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { result } from '../result';
import { theme } from '../theme';
import { Button } from '../button';

export const toolbar = {};

toolbar.element = node('div|class:toolbar');

toolbar.render = () => {
  const resultHistory = new Button({
    text: 'Clear history',
    ring: true,
    type: 'link',
    size: 'small',
    func: () => {
      result.history.clear();
      data.state.save();
      result.update();
    }
  });

  toolbar.element.appendChild(resultHistory.button);
  toolbar.element.appendChild(theme.toggle.render());

  return toolbar.element;
};
