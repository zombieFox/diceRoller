import './index.css';
import { node } from '../../utilities/node';

export const card = {};

card.render = (childNode) => {
  const card = node('div|class:card');

  const cardBody = node('div|class:card__body');

  if (childNode) {
    if (typeof childNode != 'string') {
      if (childNode.length > 0) {

        childNode.forEach((item, i) => {
          if (item instanceof HTMLElement) {
            cardBody.appendChild(item);
          } else {
            let div = document.createElement('div');
            div.innerHTML = item;
            cardBody.appendChild(div.firstChild);
          };
        });

      } else {

        if (childNode instanceof HTMLElement) {
          cardBody.appendChild(childNode);
        } else {
          let div = document.createElement('div');
          div.innerHTML = childNode;
          cardBody.appendChild(div.firstChild);
        };

      };
    };
  };

  card.appendChild(cardBody);

  return card;
};
