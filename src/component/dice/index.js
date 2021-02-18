import { formula } from '../formula';
import { dateTime } from '../../utilities/dateTime';

export const dice = {};

dice.random = (min, max) => Math.round(Math.random() * (max - min)) + min;

dice.reducer = (accumulator, currentValue) => accumulator + currentValue;

dice.roll = (allFormula) => {
  const result = {
    total: 0,
    formula: allFormula,
    timestamp: null
  };

  result.formula.forEach((item, i) => {
    item.result = {};

    item.result.rolls = {
      all: []
    };

    for (var i = 0; i < item.dice.count; i++) {
      item.result.rolls.all.push(dice.random(1, item.dice.size));
    };

    item.result.total = item.result.rolls.all.reduce(dice.reducer) + item.dice.modifier;

    item.result.rolls.lowest = Math.min(...item.result.rolls.all);

    item.result.rolls.highest = Math.max(...item.result.rolls.all);

    if (item.rules.dropLowest) {
      item.result.total = item.result.total - item.result.rolls.lowest;
    };

    result.total = result.total + item.result.total;
  });

  result.timestamp = dateTime();

  return result;
};
