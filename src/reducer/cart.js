import {ADD_TO_CART} from '../constants';

const cart = (state = {}, action) => {
  switch (action.type){
  case ADD_TO_CART:
    state = Object.assign({}, state);
    state[action.data.id] = true;
    const strArr = [];
    for ( let key in state){
      if (state[key]){
        strArr.push(key);
      }
    }
    localStorage.setItem('cart', strArr.join(','));
    break;
  }
  return state;
};

export default cart;
