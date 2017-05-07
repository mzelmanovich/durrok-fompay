import { SET_REVIEW } from '../constants';
import axios from 'axios';

import { fetchAlbum } from './albums';

export const setReview = review => ({
    type: SET_REVIEW,
    review
});

export const fetchReview = (id) => {
  return dispatch => {
    axios.get(`/api/reviews/${id}`)
      .then(response => {
        dispatch(setReview(response.data));
      });
  };
};

// export const addReview = (reviewData) => {
//     console.log('this is the reviewdata', reviewData);
//     return dispatch => {
//         axios.post(`/api/reviews`, reviewData)
//         .then(() => dispatch(fetchAlbum(reviewData.albumId)));
//     };
// };



