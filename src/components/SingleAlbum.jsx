import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReviewForm from './Review/ReviewForm.jsx';


const SingleAlbum = ({album, authenticated }) => {
  
  if (album && album.artist && album.reviews){
    
    //album.artist = {};
    //album.reviews =[];
    return (
        <div className="container-fluid center-block">
        <div className="col-xs-12">
        <div className="col-xs-4 thumb center-block">
          <Link to={`/albums/${album.id}`}><img src={album.imgURL} className="img-responsive center-block" /></Link>
          <Link to={`/albums/${album.id}`} className="col-xs-12" style={{textAlign: 'center', fontSize: '20px'}}>{album.name}</Link>
        </div>
        <div className="description">
        <h2><u>{album.name}</u></h2>
        <p>By {album.artist.name} </p>
          <p className="lead">{album.description}</p>
          <br />
          <h4>${album.price}</h4>
        <button className="btn btn-primary"><i className="fa fa-shopping-cart" /> Add to Cart </button>
        </div>
        </div>
        <div>
          <div className="col-lg-12">
           <h2>Reviews</h2>
           <ul className="list-group">
              <li className ="list-group-item">{album.reviews[0].content}</li>
              <div className="star" style={{width: ((album.reviews[0].rating/5)*100)+'px'}}>
              <div style={{width: '100px'}}>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            </div>
            </ul>
          </div>
          </div>
        {authenticated ? <ReviewForm /> : null}
        </div>
    );
  } else {
    return (
      <div className="container-fluid center-block">
        </div>
    );
  }
};
  
const mapStateToProps = ({albums, loggedInUser}) => {
  return {
    album: albums[0] || {},
    authenticated: !!loggedInUser.firstName
  };
};

// const mapDispatchToProps = (dispatch) => ({
//    loadAllAlbums: dispatch(loadAllAlbums()),
//});

export default connect(mapStateToProps)(SingleAlbum);
