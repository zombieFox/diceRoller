import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { formula } from '../formula';
import { dice } from '../dice';
import { result } from '../result';
import { Button } from '../button';

export const roll = {};

roll.keyboard = {};

roll.keyboard.bind = () => {
  window.addEventListener('keydown', (event) => {
    // ctrl+alt+r
    if (event.ctrlKey && event.altKey && event.keyCode == 82) {
      result.history.add(dice.roll({
        name: false,
        formula: JSON.parse(JSON.stringify(formula.state.current)),
      }));
      data.state.save();
      result.update();
    };
  });
};

roll.render = () => {
  const roll = node('div|class:roll');

  const rollButton = new Button({
    text: 'Roll the dice',
    ring: true,
    size: 'large',
    type: 'success',
    func: () => {

      result.history.add(dice.roll({
        name: false,
        formula: JSON.parse(JSON.stringify(formula.state.current)),
      }));
      data.state.save();
      result.update();

    }
  });

  roll.appendChild(rollButton.button);

  return roll;
};
