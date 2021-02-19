import './index.css';
import { events } from '../../events';
import { node } from '../../utilities/node';
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
    type: 'success',
    classList: ['roll__button'],
    func: () => {
      rollButton.button.dispatchEvent(events.rolledFormula);
    }
  });

  roll.appendChild(rollButton.button);

  return roll;
};
