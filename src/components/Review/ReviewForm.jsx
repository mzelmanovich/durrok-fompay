import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//import { addReview } from '../action-creators/reviews';


const ReviewForm = ({reviews}) => {
  function submitReview(evt) {
    evt.preventDefault()
    const albumId = reviews.albumId;
    const content = evt.target.content.value;
    const rating = evt.target.rating.value;
    const userId = reviews.userId;
    reviews.addReview(glassId, reviewText, rating, userId)
  }

if(reviews&&reviews[0]) {
    return (
          <div>
          <div className="col-lg-12">
           <h2>Reviews</h2>
           <ul className="list-group">
             {reviews.map( review => <li className ="list-group-item" key={review.id}>{review.content} by {review.user.firstName}
              <div className="star" style={{width: ((review.rating/5)*100)+'px'}}>
              <div style={{width: '100px'}}>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            </div>
            </li>)}
            </ul>
          </div>
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
  console.log(review)
  return {
    reviews: review.reviews
  };

};
export default connect(mapStateToProps)(ReviewForm);

//  function mapDispatchToProps(dispatch) {
//     return {
//       addReview: (glassId, review, rating, userId) => {
//         dispatch(addSingleGlassesReview(glassId, review, rating, userId))
//       }
//     }
//   }
// )(ReviewContainer)