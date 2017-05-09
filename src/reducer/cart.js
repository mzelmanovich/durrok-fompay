import {SET_CART} from '../constants';

const cart = (state = {}, action) => {
  switch (action.type){
  case SET_CART:
    state = Object.assign({}, action.data);
    break;
  }
  return state;
};

export default cart;
