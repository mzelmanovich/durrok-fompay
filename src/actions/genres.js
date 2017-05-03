import {SET_GENRES} from '../constants';

export const setGenres = (data) => {
  return {
    type: SET_GENRES,
    data
  };
};
