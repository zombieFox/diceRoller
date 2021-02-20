import './index.css';
import { node } from '../../utilities/node';
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
  saved.state.current.splice(index, 1);
};

saved.element = node('div|class:saved');

saved.delay = 100;

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

  if (saved.state.current.length > 0) {
    saved.state.current.forEach((item, i) => {
      savedBody.appendChild(saved.savedItem(item, i));
    });
  };

  const saveFormula = new Button({
    text: 'Save current formula',
    ring: true,
    type: 'link',
    size: 'small',
    func: () => {
      saved.add();
      data.state.save();
      saved.update();
    }
  });

  saved.element.appendChild(saveFormula.button);

  saved.element.appendChild(savedBody);
};

saved.savedItem = (savedData, index) => {
  const savedItem = node('div|class:saved__item');

  const savedName = node(`input|class:saved__name input__small,type:text,value:${savedData.name},placeholder:Saved formula name,tabindex:1`);

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

  let delay = null;

  const savedRemove = new Button({
    iconName: 'minus',
    round: true,
    ring: true,
    type: 'link',
    size: 'small',
    classList: ['saved__remove'],
    func: () => {

      delay = window.setTimeout(function() {
        saved.remove(index);
        data.state.save();
        saved.update();
      }, saved.delay);

    }
  });

  const savedRoll = new Button({
    text: 'Roll',
    ring: true,
    type: 'success',
    size: 'small',
    classList: ['saved__roll'],
    func: () => {

      result.history.add(dice.roll(savedData));
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
