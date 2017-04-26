const categoriesReducer = (state = '', action) => {
  switch (action.type){
  case 'TEST':
    state = action.test;
    break;
  }
  return state;
};

export default categoriesReducer;
