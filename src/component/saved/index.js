import './index.css';
import { node } from '../../utilities/node';
import { events } from '../../events';
import { data } from '../data';
import { dice } from '../dice';
import { result } from '../result';
import { formula } from '../formula';
import { ControlSet } from '../ControlSet';
import { Button } from '../button';

export const saved = {};

saved.state = {};

saved.state.current = [{
  name: 'Short sword +1',
  formula: [{
    dice: { count: 1, size: 20, modifier: 6 },
    rules: { dropLowest: false }
  }]
}, {
  name: 'Melee damage',
  formula: [{
    dice: { count: 1, size: 6, modifier: 4 },
    rules: { dropLowest: false }
  }, {
    dice: { count: 1, size: 4, modifier: 1 },
    rules: { dropLowest: false }
  }]
}];

saved.add = () => {
  const formulaToAdd = {
    name: '',
    formula: JSON.parse(JSON.stringify(formula.state.current))
  };

  saved.state.current.push(formulaToAdd);
};

saved.remove = (index) => {
  console.log(index);
  saved.state.current.splice(index, 1);
};

saved.element = node('div|class:saved');

saved.clear = () => {
  while (saved.element.lastChild) {
    saved.element.removeChild(saved.element.lastChild);
  };
};

saved.render = () => {
  saved.update();

  return saved.element;
};

saved.update = () => {
  saved.clear();

  const savedBody = node('div|class:saved__body');

  const savedToRender = saved.state.current;

  if (savedToRender.length > 0) {
    savedToRender.forEach((item, i) => {
      savedBody.appendChild(saved.savedItem(item, i));
    });
  };

  saved.element.appendChild(savedBody);
};

saved.savedItem = (savedData, index) => {
  const savedItem = node('div|class:saved__item');

  const savedName = node(`input|class:saved__name,type:text,value:${savedData.name},placeholder:Saved roll formula,tabindex:1`);

  savedName.addEventListener('input', () => {
    savedData.name = savedName.value;
    data.state.save();
  });

  const savedFormula = node(`div|class:saved__formula`);

  savedData.formula.forEach((item, i) => {
    const formulaDice = node('div|class:saved__formula-dice');

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

    savedFormula.appendChild(formulaDice);
  });

  const savedRemove = new Button({
    iconName: 'minus',
    round: true,
    ring: true,
    type: 'link',
    size: 'small',
    classList: ['saved__remove'],
    func: () => {
      saved.remove(index);
      data.state.save();
      saved.update();
    }
  });

  const savedRoll = new Button({
    text: 'Roll',
    ring: true,
    type: 'link',
    size: 'small',
    classList: ['saved__roll'],
    func: () => {
      result.history.add(dice.roll(savedData.formula));
      data.state.save();
      result.update();
    }
  });

  savedItem.appendChild(savedRemove.button);

  savedItem.appendChild(savedName);

  savedItem.appendChild(savedFormula);

  savedItem.appendChild(savedRoll.button);

  return savedItem;
};
