import './index.css';
import { events } from '../../events';
import { node } from '../../utilities/node';
import { formula } from '../formula';
import { dice } from '../dice';

export const result = {};

result.state = {};

result.state.history = [];

result.state.count = {
  max: 50
};

result.history = {};

result.history.add = (data) => {
  result.state.history.push(JSON.parse(JSON.stringify(data)));
};

result.history.clear = (data) => {
  result.state.history = [];
};

result.element = node('div|class:result');

result.clear = () => {
  while (result.element.lastChild) {
    result.element.removeChild(result.element.lastChild);
  };
};

result.render = () => {
  result.update();
  return result.element;
};

result.update = () => {
  result.clear();

  const resultToRender = JSON.parse(JSON.stringify(result.state.history)).reverse().slice(0, result.state.count.max);

  if (resultToRender.length > 0) {
    if (window.innerWidth > 800) {
      resultToRender.forEach((item, i) => {
        result.element.appendChild(result.resultItem(item));
      });
    } else {
      result.element.appendChild(result.resultItem(resultToRender[0]));
    };
  };
};


result.resultItem = (resultData) => {
  const resultItem = node('div|class:result__item');

  const resultTotal = node(`div:${resultData.total}|class:result__total`);

  const resultBody = node('div|class:result__details');

  const resultTimestamp = node('div|class:result__timestamp');

  resultTimestamp.textContent = `${resultData.timestamp.hours}:${resultData.timestamp.minutes < 10 ? `0`+resultData.timestamp.minutes : resultData.timestamp.minutes}:${resultData.timestamp.seconds < 10 ? `0`+resultData.timestamp.seconds : resultData.timestamp.seconds} ${resultData.timestamp.date}/${resultData.timestamp.monthString}/${resultData.timestamp.year}`;

  resultData.formula.forEach((item, i) => {
    const formula = node('div|class:result__formula');

    const formulaDice = node('div|class:result__formula-dice');

    let diceString = '';
    if (item.dice.count > 0) {
      diceString = diceString + item.dice.count;
    };
    diceString = diceString + ' d' + item.dice.size;
    if (item.dice.modifier > 0) {
      diceString = diceString + ' +' + item.dice.modifier;
    } else if (item.dice.modifier < 0) {
      diceString = diceString + ' ' + item.dice.modifier;
    };
    formulaDice.textContent = diceString;

    formula.appendChild(formulaDice);

    const formulaRolls = node('div|class:result__rolls');

    const formulaRollsTitle = node('div:Rolled\\:|class:result__rolls-title');

    const rollsList = node('ul|class:result__rolls-list list__inline list__unstyled');

    item.result.rolls.all.forEach((resultItem, i) => {
      const rollsListItem = node(`li:${resultItem}|class:result__rolls-list-item`);

      if (item.dice.size === 20 && resultItem === 20) {
        rollsListItem.classList.add('result__critical-success');
      } else if (item.dice.size === 20 && resultItem === 1) {
        rollsListItem.classList.add('result__critical-failure');
      };

      rollsList.appendChild(rollsListItem);
    });

    formulaRolls.appendChild(formulaRollsTitle);

    formulaRolls.appendChild(rollsList);

    formula.appendChild(formulaRolls);

    resultBody.appendChild(formula);
  });

  resultBody.appendChild(resultTimestamp);

  resultItem.appendChild(resultTotal);

  resultItem.appendChild(resultBody);

  return resultItem;
};
