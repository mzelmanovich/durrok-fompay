import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const ReviewDisplay = ({reviews}) => {

    if (reviews && reviews[0]) {
      return (
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
            ) ;   
      }
      else {
            return (
                    <div className="container-fluid center-block">
                    </div>
              );
            }
};

const mapStateToProps = ({review}) => {
  return {
    reviews: review.reviews
  };

};
export default connect(mapStateToProps)(ReviewDisplay);


