import { global } from '../global';
import { formula } from '../formula';
import { result } from '../result';

export const data = {}

data.state = {};

data.state.save = () => {
  const dataToSave = {
    formula: formula.state,
    result: result.state
  };

  data.save(dataToSave);
};

data.state.load = () => {
  const dataToLoad = data.load();

  formula.state = dataToLoad.formula;

  result.state = dataToLoad.result;
};

data.save = (data) => {
  localStorage.setItem(global.name.string, JSON.stringify(data));
};

data.load = () => {
  return JSON.parse(localStorage.getItem(global.name.string));
};

data.wipe = () => {
  localStorage.removeItem(global.name.string);
};
