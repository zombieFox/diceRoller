import { global } from '../global';
import { formula } from '../formula';
import { result } from '../result';
import { theme } from '../theme';

export const data = {};

data.state = {};

data.state.save = () => {
  const dataToSave = {
    [global.name.string]: true,
    theme: theme.state,
    formula: formula.state,
    result: result.state
  };

  data.save(dataToSave);
};

data.state.load = () => {
  const dataToLoad = data.load();

  if (dataToLoad) {
    if (dataToLoad[global.name.string]) {
      theme.state = dataToLoad.theme;
      formula.state = dataToLoad.formula;
      result.state = dataToLoad.result;
    };
  };
};

data.save = (data) => {
  localStorage.setItem(global.name.string, JSON.stringify(data));
};

data.load = () => {
  return JSON.parse(localStorage.getItem(global.name.string));
};

data.clear = () => {
  localStorage.removeItem(global.name.string);
};
