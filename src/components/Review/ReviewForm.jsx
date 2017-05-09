import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {addSingleAlbumReview} from '../../actions/review';

//import { addReview } from '../action-creators/reviews';
// content, rating, albumId, userId

const ReviewForm = ({reviews, addReview, albumId}) => {
    function submitReview(evt) {
      evt.preventDefault();
      const content = evt.target.content.value;
      const rating = evt.target.rating.value;
      addReview(content, rating, albumId);
    }

  if (reviews && reviews[0]) {
        return (        
            <div className="col-lg-12" style={{paddingBottom: 30}}>
              <hr />
              <h4>Add a Review</h4>
                <form className="col-lg-6 pull-left" id="review-form" onSubmit={submitReview}>
                <textarea className="form-control" form="review-form" name="content" placeholder="Enter Review Here" style={{smarginBottom: 10, height: 80}}></textarea>
                <input type="submit" className="btn btn-warning pull-right" value="Add Review" />
                <select className="form-control pull-right" name="rating" style={{width: 40, marginRight: 5}}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
               </select>
               <label className="pull-right" style={{margin: '6px'}}>Rating:</label>
               </form>
           </div>
        );
    }
    else {
      return (
        <div className="container-fluid center-block">
            </div>
        );
}
}

const mapStateToProps = ({review}) => {
  return {
    reviews: review.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReview:(content, rating, albumId, userId) => {
      dispatch(addSingleAlbumReview(content, rating, albumId, userId));
    }
  };

};



export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);