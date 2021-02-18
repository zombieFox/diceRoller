import { count } from '../count';
import { size } from '../size';
import { modifier } from '../modifier';

export const ControlSet = function(formula) {
  this.count = count.render(formula.dice);

  this.size = size.render(formula.dice);

  this.modifier = modifier.render(formula.dice);
};
