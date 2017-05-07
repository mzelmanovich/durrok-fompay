import { SET_STARS } from '../constants';
import axios from 'axios';

import { fetchAlbum } from './albums';

export const setStarts =  (data) => ({
    type: SET_STARS,
    data
});

export const fetchReview = (id) => {
//   return dispatch => {
//     axios.get(`/api/reviews/${id}`)
//       .then(response => {
//         dispatch(setReview(response.data));
//       });
//   };
// };

// export const addReview = (reviewData) => {
//     console.log('this is the reviewdata', reviewData);
//     return dispatch => {
//         axios.post(`/api/reviews`, reviewData)
//         .then(() => dispatch(fetchAlbum(reviewData.albumId)));
//     };
// };



