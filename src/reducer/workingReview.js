import {SET_STARS} from '../constants';

const initState = {
  stars: 0,
  content: ''
};
const albums = (state = initState, action) => {
  switch (action.type){
  case SET_STARS:
    state = Object.assign({}, state, {stars: action.data});
    break;
  }
  return state;
};

export default albums;
