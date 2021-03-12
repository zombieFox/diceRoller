import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { dice } from '../dice';
import { result } from '../result';
import { formula } from '../formula';
import { ControlFormulaSet } from '../ControlFormulaSet';
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

saved.up = (index) => {
  if (index > 0) {
    let item = saved.state.current.splice(index, 1)[0];
    saved.state.current.splice(index - 1, 0, item);
  };
};

saved.down = (index) => {
  if (index < saved.state.current.length) {
    let item = saved.state.current.splice(index, 1)[0];
    saved.state.current.splice(index + 1, 0, item);
  };
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

  let delayUpdate = null;

  const savedBody = node('div|class:saved__body');

  if (saved.state.current.length > 0) {
    saved.state.current.forEach((item, i) => {
      savedBody.appendChild(saved.savedItem(item, i));
    });
  };

  const saveFormula = new Button({
    text: 'Save current formula',
    ring: true,
    type: 'light',
    size: 'small',
    func: () => {

      delayUpdate = window.setTimeout(function() {
        saved.add();
        data.state.save();
        saved.update();
      }, saved.delay);

    }
  });

  saved.element.appendChild(saveFormula.button);

  saved.element.appendChild(savedBody);
};

saved.savedItem = (savedData, id) => {
  const savedItem = node('div|class:saved__item');

  const savedName = node('div|class:saved__name');

  const savedNameLabel = node(`label:Saved formula name|class:saved__name-label sr__only,for:saved__name-${id}`);

  const savedNameInput = node(`input|class:saved__name-input input__small,id:saved__name-${id},type:text,value:${savedData.name},placeholder:Unnamed formula,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false`);

  savedNameInput.addEventListener('input', () => {
    savedData.name = savedNameInput.value;
    data.state.save();
  });

  const savedControls = node('div|class:saved__controls');

  const savedFormula = node('div|class:saved__formula');

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

  let delayUpdate = null;

  const savedRemove = new Button({
    iconName: 'minus',
    round: true,
    ring: true,
    type: 'link',
    size: 'small',
    sr: 'Remove formula',
    classList: ['saved__remove'],
    func: () => {

      delayUpdate = window.setTimeout(function() {
        saved.remove(id);
        data.state.save();
        saved.update();
      }, saved.delay);

    }
  });

  const savedUp = new Button({
    iconName: 'chevronUp',
    round: true,
    ring: true,
    type: 'link',
    size: 'small',
    sr: 'Move formula up',
    classList: ['saved__up'],
    func: () => {

      delayUpdate = window.setTimeout(function() {
        saved.up(id);
        data.state.save();
        saved.update();
      }, saved.delay);

    }
  });

  const savedDown = new Button({
    iconName: 'chevronDown',
    round: true,
    ring: true,
    type: 'link',
    size: 'small',
    sr: 'Move formula down',
    classList: ['saved__down'],
    func: () => {

      delayUpdate = window.setTimeout(function() {
        saved.down(id);
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

      result.history.add(dice.roll(JSON.parse(JSON.stringify(savedData))));
      data.state.save();
      result.update();

    }
  });

  savedControls.appendChild(savedRemove.button);

  savedControls.appendChild(savedUp.button);

  savedControls.appendChild(savedDown.button);

  savedItem.appendChild(savedControls);

  savedName.appendChild(savedNameLabel);

  savedName.appendChild(savedNameInput);

  savedItem.appendChild(savedName);

  savedItem.appendChild(savedFormula);

  savedItem.appendChild(savedRoll.button);

  return savedItem;
};
