import {SET_JUMBOTRON} from '../constants';

const jumbotron = (state = [], action) => {
  {
    switch (action.type){
    case SET_JUMBOTRON:
      state = action.data;
      break;
    }
    return state;
  }
};

export default jumbotron;
