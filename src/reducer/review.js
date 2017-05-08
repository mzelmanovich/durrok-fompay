import { FETCH_ALL_REVIEWS, SET_REVIEWS } from '../constants';


// const initialReviewState = {
//   // selectedReview: {
//   //   Author: {
//   //       name: ''
//   //   },
//   //   author_id: '',
//   //   comment: '',
//   //   rating: 1,
//   //   title: ''
//   // }
// };

const defaultState = {
  reviews: [],
  singleReview: {}
};

export default function (state = defaultState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case FETCH_ALL_REVIEWS:
      newState.reviews = action.allReviews;
      break;

    case SET_REVIEWS:
    newState.reviews = action.data;
    break;
  default:
    return state;
  }

  return newState;
}
