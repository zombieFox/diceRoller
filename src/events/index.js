import { formula } from '../component/formula';
import { dice } from '../component/dice';

export const events = {
  key: {
    diceRolled: 'diceRolled'
  }
};

events.diceRolled = new CustomEvent(events.key.diceRolled, {
  'bubbles': true
});
