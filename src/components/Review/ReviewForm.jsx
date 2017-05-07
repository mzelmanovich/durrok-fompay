import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//import { addReview } from '../action-creators/reviews';


export default function ReviewForm ()  {

    return (
         <div className="col-lg-12" style={{paddingBottom: 30}}>
          <hr />
           <h2>Reviews</h2>
          <form className="col-lg-6 pull-left" id="review-form">
            <textarea className="form-control" form="review-form" placeholder="Enter Review Here" style={{smarginBottom: 10, height: 80}}></textarea>
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



// const mapProps = state => {
//     return {
//         product: state.products.selected,
//         user: state.auth
//     };
// };
// const mapDispatch = { addReview };

// export default connect(mapProps, mapDispatch)(ReviewForm);