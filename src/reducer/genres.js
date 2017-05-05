import {SET_GENRES} from '../constants';

const genres = (state = [], action) => {
  switch (action.type){
  case SET_GENRES:
    state = action.data;
    break;
  }
  return state;
};

export default genres;
