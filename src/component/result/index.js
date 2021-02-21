import './index.css';
import { node } from '../../utilities/node';
import { formula } from '../formula';
import { dice } from '../dice';
import { Button } from '../button';

export const result = {};

result.state = {};

result.state.history = [];

result.state.count = {
  max: 50
};

result.state.full = false;

result.history = {};

result.history.add = (data) => {
  result.state.history.push(JSON.parse(JSON.stringify(data)));
};

result.history.clear = (data) => {
  result.state.history = [];
};

result.element = {
  root: node('div|class:result'),
  history: node('div|class:result__history'),
  control: node('div|class:result__control')
};

result.clear = () => {
  while (result.element.history.lastChild) {
    result.element.history.removeChild(result.element.history.lastChild);
  };
};

result.render = () => {
  result.element.root.appendChild(result.element.control);

  result.element.root.appendChild(result.element.history);

  result.control();

  result.update();

  return result.element.root;
};

result.control = () => {
  const resultFull = new Button({
    iconName: 'chevronUp',
    round: true,
    ring: true,
    size: 'small',
    type: 'link',
    classList: ['result__full'],
    func: () => {

      result.full.toggle();
      result.full.render();

    }
  });

  result.element.control.appendChild(resultFull.button);
};

result.full = {}

result.full.toggle = () => {
  if (result.state.full) {
    result.state.full = false;
  } else {
    result.state.full = true;
  };
};

result.full.render = () => {
  const html = document.querySelector('html');

  if (result.state.full) {
    html.classList.add('is-result-full');
  } else {
    html.classList.remove('is-result-full');
  };
};

result.update = () => {
  result.clear();

  const resultToRender = JSON.parse(JSON.stringify(result.state.history)).reverse().slice(0, result.state.count.max);

  if (resultToRender && resultToRender.length > 0) {
    resultToRender.forEach((item, i) => {
      result.element.history.appendChild(result.resultItem(item));
    });
  };
};

result.resultItem = (resultData) => {
  const resultItem = node('div|class:result__item');

  const resultTotal = node(`div:${resultData.total}|class:result__total`);

  const resultDetails = node('div|class:result__details');

  const resultTimestamp = node('div|class:result__timestamp');

  resultTimestamp.textContent = `${resultData.timestamp.hours < 10 ? `0`+resultData.timestamp.hours : resultData.timestamp.hours}:${resultData.timestamp.minutes < 10 ? `0`+resultData.timestamp.minutes : resultData.timestamp.minutes}:${resultData.timestamp.seconds < 10 ? `0`+resultData.timestamp.seconds : resultData.timestamp.seconds} ${resultData.timestamp.date}/${resultData.timestamp.monthString}/${resultData.timestamp.year}`;

  if (resultData.name) {
    resultDetails.appendChild(node(`div:${resultData.name}|class:result__name`));
  };

  resultData.formula.forEach((item, i) => {
    const formula = node('div|class:result__formula');

    const formulaDice = node('div|class:result__formula-dice');

    let diceString = '';
    if (item.dice.count > 1) {
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

    resultDetails.appendChild(formula);
  });

  resultDetails.appendChild(resultTimestamp);

  resultItem.appendChild(resultTotal);

  resultItem.appendChild(resultDetails);

  return resultItem;
};
