import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReviewForm from './Review/ReviewForm.jsx';
import ReviewDisplay from './Review/ReviewDisplay.jsx';
import {putInCart, removeFromCart} from '../actions/cart';

const SingleAlbum = ({album, authenticated, onClick}) => {
  if (album && !album.artist){
    album.artist = {};
  }
  return (
        <div className="container-fluid center-block">
        <div className="col-xs-12">
        <div className="col-xs-4 thumb center-block">
          <Link to={`/albums/${album.id}`}><img src={album.imgURL} className="img-responsive center-block" /></Link>
          <Link to={`/albums/${album.id}`} className="col-xs-12" style={{textAlign: 'center', fontSize: '20px'}}>{album.name}</Link>
        </div>
        <div className="col-xs-4 thumb center-block">
        <iframe src={`https://embed.spotify.com/?uri=spotify:album:${album.spotId}`} width="300" height="380" frameboder="0" allowTransparency="true" />
        </div>
        <div className="description">
        <h2><u>{album.name}</u></h2>
        <p>By {album.artist.name} </p>
          <p className="lead">{album.description}</p>
          <h4>${(album.price * 1).toFixed(2)}</h4>
        <button className="btn btn-primary" onClick={onClick(album)}><i className="fa fa-shopping-cart" /> Add to Cart </button>
        </div>
        </div>
        <div>
          <ReviewDisplay />
        {authenticated ? <ReviewForm albumId={album.id} /> : null}
        </div>
        </div>
  );
};

const mapStateToProps = ({albums, loggedInUser}) => {
  return {
    album: albums[0] || {},
    authenticated: !!loggedInUser.firstName
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: album => (event) => {
    event.preventDefault();
    dispatch(putInCart(album));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);
