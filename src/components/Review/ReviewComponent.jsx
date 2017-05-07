import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';



const Review = ({ review }) => {

    return (
            <div className="row">
                <div className="col s12">
                    <div className="card grey lighten-4">
                        <div className="card-content black-text">
                            <span><Link to={`/reviews/${review.id}`} className="card-title">{ review.title }</Link> by Summer</span>
                            <span className="right">
                                Rating: {
                                    Array(review.rating).fill('filler').map((el, idx) => (<i className="material-icons" key={idx}>star</i>))
                                }
                            </span>
                            <p>Simply Awesome</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Review;