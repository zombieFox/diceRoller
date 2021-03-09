import './index.css';
import { node } from '../../utilities/node';

export const styleguide = {};

styleguide.colour = {};

styleguide.colour.render = () => {
  return node('section', [
    node('div|class:styleguide__colour', [
      node('div|class:styleguide__colour-list', [
        node('div:900|class:styleguide__colour-item styleguide__colour-primary-900'),
        node('div:800|class:styleguide__colour-item styleguide__colour-primary-800'),
        node('div:700|class:styleguide__colour-item styleguide__colour-primary-700'),
        node('div:600|class:styleguide__colour-item styleguide__colour-primary-600'),
        node('div:500|class:styleguide__colour-item styleguide__colour-primary-500'),
        node('div:400|class:styleguide__colour-item styleguide__colour-primary-400'),
        node('div:300|class:styleguide__colour-item styleguide__colour-primary-300'),
        node('div:200|class:styleguide__colour-item styleguide__colour-primary-200'),
        node('div:100|class:styleguide__colour-item styleguide__colour-primary-100')
      ]),
      node('div|class:styleguide__colour-list', [
        node('div:900|class:styleguide__colour-item styleguide__colour-secondary-900'),
        node('div:800|class:styleguide__colour-item styleguide__colour-secondary-800'),
        node('div:700|class:styleguide__colour-item styleguide__colour-secondary-700'),
        node('div:600|class:styleguide__colour-item styleguide__colour-secondary-600'),
        node('div:500|class:styleguide__colour-item styleguide__colour-secondary-500'),
        node('div:400|class:styleguide__colour-item styleguide__colour-secondary-400'),
        node('div:300|class:styleguide__colour-item styleguide__colour-secondary-300'),
        node('div:200|class:styleguide__colour-item styleguide__colour-secondary-200'),
        node('div:100|class:styleguide__colour-item styleguide__colour-secondary-100')
      ]),
      node('div|class:styleguide__colour-list', [
        node('div:900|class:styleguide__colour-item styleguide__colour-success-900'),
        node('div:800|class:styleguide__colour-item styleguide__colour-success-800'),
        node('div:700|class:styleguide__colour-item styleguide__colour-success-700'),
        node('div:600|class:styleguide__colour-item styleguide__colour-success-600'),
        node('div:500|class:styleguide__colour-item styleguide__colour-success-500'),
        node('div:400|class:styleguide__colour-item styleguide__colour-success-400'),
        node('div:300|class:styleguide__colour-item styleguide__colour-success-300'),
        node('div:200|class:styleguide__colour-item styleguide__colour-success-200'),
        node('div:100|class:styleguide__colour-item styleguide__colour-success-100')
      ]),
      node('div|class:styleguide__colour-list', [
        node('div:900|class:styleguide__colour-item styleguide__colour-danger-900'),
        node('div:800|class:styleguide__colour-item styleguide__colour-danger-800'),
        node('div:700|class:styleguide__colour-item styleguide__colour-danger-700'),
        node('div:600|class:styleguide__colour-item styleguide__colour-danger-600'),
        node('div:500|class:styleguide__colour-item styleguide__colour-danger-500'),
        node('div:400|class:styleguide__colour-item styleguide__colour-danger-400'),
        node('div:300|class:styleguide__colour-item styleguide__colour-danger-300'),
        node('div:200|class:styleguide__colour-item styleguide__colour-danger-200'),
        node('div:100|class:styleguide__colour-item styleguide__colour-danger-100')
      ])
    ]),
    node('div|class:styleguide__colour', [
      node('div|class:styleguide__colour-black'),
      node('div|class:styleguide__colour-white')
    ])
  ]);
};
