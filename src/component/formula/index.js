import './index.css';
import { node } from '../../utilities/node';
import { data } from '../data';
import { ControlSet } from '../ControlSet';
import { Button } from '../button';

export const formula = {};

formula.state = {};

formula.state.current = [{
  dice: { count: 1, size: 20, modifier: 2 },
  rules: { dropLowest: false }
}, {
  dice: { count: 6, size: 6, modifier: 6 },
  rules: { dropLowest: false }
}];

formula.element = node('div|class:formula');

formula.delay = 100;

formula.default = {
  dice: { count: 1, size: 20, modifier: 0 },
  rules: { dropLowest: false }
};

formula.add = () => {
  formula.state.current.push(JSON.parse(JSON.stringify(formula.default)));
};

formula.remove = (index) => {
  formula.state.current.splice(index, 1);
  if (formula.state.current.length === 0) {
    formula.add();
  };
};

formula.reset = () => {
  formula.state.current = JSON.parse(JSON.stringify([formula.default]));
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

    let delayUpdate = null;

    const remove = new Button({
      iconName: 'minus',
      round: true,
      ring: true,
      size: 'small',
      type: 'danger',
      classList: ['formula__remove'],
      func: () => {

        delayUpdate = window.setTimeout(function() {
          formula.remove(i);
          formula.update();
          data.state.save();
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

  let delayUpdate = null;

  const formulaAdd = new Button({
    iconName: 'plus',
    round: true,
    ring: true,
    size: 'small',
    classList: ['formula__add'],
    func: () => {

      delayUpdate = window.setTimeout(function() {
        formula.add();
        formula.update();
        data.state.save();
      }, formula.delay);

    }
  });

  formula.element.appendChild(formulaBody);

  formula.element.appendChild(node('div|class:formula__control', [
    formulaAdd.button
  ]));
};
