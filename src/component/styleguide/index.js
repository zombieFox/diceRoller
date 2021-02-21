import './index.css';
import { node } from '../../utilities/node';

export const styleguide = {};

styleguide.colour = {};

styleguide.colour.render = () => {
  return node('section', [
    node('div|class:styleguide__colour', [
      node('div|class:styleguide__colour-primary', [
        node('div|class:styleguide__colour-primary-100'),
        node('div|class:styleguide__colour-primary-200'),
        node('div|class:styleguide__colour-primary-300'),
        node('div|class:styleguide__colour-primary-400'),
        node('div|class:styleguide__colour-primary-500'),
        node('div|class:styleguide__colour-primary-600'),
        node('div|class:styleguide__colour-primary-700'),
        node('div|class:styleguide__colour-primary-800'),
        node('div|class:styleguide__colour-primary-900')
      ]),
      node('div|class:styleguide__colour-secondary', [
        node('div|class:styleguide__colour-secondary-100'),
        node('div|class:styleguide__colour-secondary-200'),
        node('div|class:styleguide__colour-secondary-300'),
        node('div|class:styleguide__colour-secondary-400'),
        node('div|class:styleguide__colour-secondary-500'),
        node('div|class:styleguide__colour-secondary-600'),
        node('div|class:styleguide__colour-secondary-700'),
        node('div|class:styleguide__colour-secondary-800'),
        node('div|class:styleguide__colour-secondary-900')
      ]),
      node('div|class:styleguide__colour-success', [
        node('div|class:styleguide__colour-success-100'),
        node('div|class:styleguide__colour-success-200'),
        node('div|class:styleguide__colour-success-300'),
        node('div|class:styleguide__colour-success-400'),
        node('div|class:styleguide__colour-success-500'),
        node('div|class:styleguide__colour-success-600'),
        node('div|class:styleguide__colour-success-700'),
        node('div|class:styleguide__colour-success-800'),
        node('div|class:styleguide__colour-success-900')
      ]),
      node('div|class:styleguide__colour-danger', [
        node('div|class:styleguide__colour-danger-100'),
        node('div|class:styleguide__colour-danger-200'),
        node('div|class:styleguide__colour-danger-300'),
        node('div|class:styleguide__colour-danger-400'),
        node('div|class:styleguide__colour-danger-500'),
        node('div|class:styleguide__colour-danger-600'),
        node('div|class:styleguide__colour-danger-700'),
        node('div|class:styleguide__colour-danger-800'),
        node('div|class:styleguide__colour-danger-900')
      ])
    ]),
    node('div|class:styleguide__colour', [
      node('div|class:styleguide__colour-black'),
      node('div|class:styleguide__colour-white')
    ])
  ]);
};
