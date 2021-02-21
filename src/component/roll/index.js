import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { formula } from '../formula';
import { dice } from '../dice';
import { result } from '../result';
import { Button } from '../button';

export const roll = {};

roll.render = () => {
  const roll = node('div|class:roll');

  const rollButton = new Button({
    text: 'Roll the dice',
    ring: true,
    size: 'large',
    type: 'success',
    classList: ['roll__button'],
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
