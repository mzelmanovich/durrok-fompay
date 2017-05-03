import {SET_JUMBOTRON} from '../constants';

export const setJumbotronData = (data) => {
  return {
    type: SET_JUMBOTRON,
    data
  };
};
