import {SET_LOGGEDIN_USER} from '../constants';

const loggedInUser = (state = {}, action) => {
  switch (action.type){
  case SET_LOGGEDIN_USER:
    state = action.data;
    break;
  }
  return state;
};

export default loggedInUser;
