import { global } from '../global';
import { formula } from '../formula';
import { saved } from '../saved';
import { result } from '../result';
import { theme } from '../theme';

export const data = {};

data.state = {};

data.state.save = () => {
  const dataToSave = {
    [global.name.string]: true,
    formula: formula.state,
    saved: saved.state,
    result: result.state,
    theme: theme.state
  };

  data.save(dataToSave);
};

data.state.load = () => {
  const dataToLoad = data.load();

  if (dataToLoad) {
    if (dataToLoad[global.name.string]) {
      formula.state = dataToLoad.formula;
      saved.state = dataToLoad.saved;
      result.state = dataToLoad.result;
      theme.state = dataToLoad.theme;
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
