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
  name: 'Melee kapow!',
  formula: [{
    dice: { count: 1, size: 6, modifier: 4 },
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

  const savedToRender = JSON.parse(JSON.stringify(saved.state.current));

  if (savedToRender.length > 0) {
    savedToRender.forEach((item, i) => {
      saved.element.appendChild(saved.savedItem(item));
    });
  };
};

saved.savedItem = (savedData) => {
  const savedItem = node('div|class:saved__item');

  const savedName = node(`div:${savedData.name}|class:saved__name`);

  const rollSaved = new Button({
    text: 'Roll',
    ring: true,
    type: 'link',
    size: 'small',
    func: () => {
      result.history.add(dice.roll(savedData.formula));
      data.state.save();
      result.update();
    }
  });


  savedItem.appendChild(savedName);

  savedItem.appendChild(rollSaved.button);

  console.log(savedData);

  return savedItem;
};
