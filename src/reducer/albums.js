import {SET_ALBUMS, SET_SPOTIFY} from '../constants';

const albums = (state = [], action) => {
  switch (action.type){
  case SET_ALBUMS:
    state = [...action.data];
    break;
  case SET_SPOTIFY:
    state = [...action.data];
    break;
  }
  return state;
};

export default albums;
