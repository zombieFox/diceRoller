import { count } from '../count';
import { size } from '../size';
import { modifier } from '../modifier';

export const ControlSet = function(formula, id) {
  this.count = count.render(formula.dice, id);

  this.size = size.render(formula.dice, id);

  this.modifier = modifier.render(formula.dice, id);
};
