import './index.css';
import { events } from '../../events';
import { node } from '../../utilities/node';
import { icon } from '../icon';
import { ControlSet } from '../ControlSet';
import { Button } from '../button';

export const formula = {};

formula.element = node('div|class:formula');

formula.delay = 100;

formula.default = {
  dice: { count: 1, size: 20, modifier: 0 },
  rules: { dropLowest: false }
};

formula.state = {};

formula.state.current = [{
  dice: { count: 1, size: 20, modifier: 2 },
  rules: { dropLowest: false }
}, {
  dice: { count: 6, size: 6, modifier: 6 },
  rules: { dropLowest: false }
}];

formula.state.add = () => {
  formula.state.current.push(JSON.parse(JSON.stringify(formula.default)));
};

formula.state.remove = (index) => {
  formula.state.current.splice(index, 1);
  if (formula.state.current.length === 0) {
    formula.state.add();
  };
};

formula.clear = () => {
  while (formula.element.lastChild) {
    formula.element.removeChild(formula.element.lastChild);
  };
};

formula.render = () => {
  formula.update();
  return formula.element;
};

formula.update = () => {
  formula.clear();

  const formulaBody = node('div|class:formula__body');

  formula.state.current.forEach((item, i) => {
    const formulaSet = node('div|class:formula__set');

    let delay = null;

    const remove = new Button({
      iconName: 'minus',
      round: true,
      ring: true,
      type: 'danger',
      classList: ['formula__remove'],
      func: () => {

        delay = window.setTimeout(function() {
          formula.state.remove(i);
          formula.update();
        }, formula.delay);

      }
    });

    const block = new ControlSet(item);

    if (formula.state.current.length > 1) {
      formulaSet.appendChild(remove.button);
    };

    formulaSet.appendChild(block.count);

    formulaSet.appendChild(block.size);

    formulaSet.appendChild(block.modifier);

    formulaBody.appendChild(formulaSet);
  });

  let delay = null;

  const formulaAdd = new Button({
    iconName: 'plus',
    round: true,
    ring: true,
    classList: ['formula__add'],
    func: () => {

      delay = window.setTimeout(function() {
        formula.state.add();
        formula.update();
      }, formula.delay);

    }
  });

  formula.element.appendChild(formulaBody);

  formula.element.appendChild(node('div|class:formula__control', [
    formulaAdd.button
  ]));
};
