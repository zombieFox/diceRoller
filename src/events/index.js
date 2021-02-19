import { formula } from '../component/formula';
import { dice } from '../component/dice';

export const events = {
  key: {
    rolledFormula: 'rolledFormula',
    rollSaved: 'rollSaved'
  }
};

events.rolledFormula = new CustomEvent(events.key.rolledFormula, {
  'bubbles': true
});
