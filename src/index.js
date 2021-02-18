import { events } from './events';
import { component } from './component';
import { node } from './utilities/node';

export const app = {};

app.element = document.querySelector('.app');

app.clear = () => {
  while (app.element.lastChild) {
    app.element.removeChild(app.element.lastChild);
  };
};

app.render = () => {
  const add = [
    node('div|class:layout', [
      node('section|class:layout__formula', [
        node('section|class:layout__wrap', [
          component.formula.render()
        ])
      ]),
      node('section|class:layout__roll', [
        component.roll.render()
      ]),
      node('section|class:layout__result', [
        node('section|class:layout__wrap', [
          component.result.render()
        ])
      ])
    ])
  ];

  add.forEach((item, i) => {
    app.element.appendChild(item);
  });
};

app.update = () => {
  app.clear();
  app.render();
};

document.querySelector('body').addEventListener(events.key.diceRolled, (event) => {
  component.result.history.add(component.dice.roll(component.formula.state.current));
  component.result.update();
});

// init app
component.theme.style.render();
component.theme.keyboard.bind();
component.global.render();
app.render();
