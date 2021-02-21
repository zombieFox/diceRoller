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
      node('section|class:layout__toolbar', [
        component.toolbar.render()
      ]),
      node('section|class:layout__formula', [
        node('section|class:layout__wrap', [
          node('section|class:layout__controls', [
            component.formula.render(),
            component.roll.render(),
            component.saved.render()
          ])
        ])
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

// init app
component.data.state.load();
component.theme.style.render();
component.theme.keyboard.bind();
component.global.render();
app.render();
