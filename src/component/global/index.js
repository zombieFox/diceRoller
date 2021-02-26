export const global = {};

global.name = {
  display: 'Dice Roller',
  string: 'diceRoller'
};

global.render = () => {
  document.title = global.name.display;
};
