import { SET_REVIEWS, FETCH_ALL_REVIEWS } from '../constants';
import axios from 'axios';



import { fetchAlbum } from './albums';

export const setReviews = reviews => ({
    type: SET_REVIEWS,
    data: reviews
});

export const fetchallreviews = allReviews => ({
    type: FETCH_ALL_REVIEWS,
    allReviews
});

export const fetchReviews = (id) => {
  return dispatch => {
    axios.get(`/api/albums/${id}/reviews`)
      .then(response => {
        dispatch(setReviews(response.data));
      });
  };
};

// export const getSingleAlbumReviews = (albumId) => dispatch=> 
// axios.get( 'api/reviews/${albumId}')
// .then(( selectedReviews )=> dispatch(fetchallreviews(selectedReviews.data)))
// .catch(console.error) ;

export const addSingleAlbumReview = (albumId, content, rating, userId) => dispatch => 
axios.post('api/reviews/${albumId}',{text: content, rating, userId})
.then(( newReview)=> dispatch(setReview(newReview.data)))
.catch(console.error) ;


// export const addReview = (reviewData) => {
//     console.log('this is the reviewdata', reviewData);
//     return dispatch => {
//         axios.post(`/api/reviews`, reviewData)
//         .then(() => dispatch(fetchAlbum(reviewData.albumId)));
//     };
// };



