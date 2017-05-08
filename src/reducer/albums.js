import {SET_ALBUMS} from '../constants';

const albums = (state = [], action) => {
  switch (action.type){
  case SET_ALBUMS:
   
    state = [...action.data];
    break;
  }
  return state;
};

export default albums;
