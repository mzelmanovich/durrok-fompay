import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Review from './Review/ReviewForm.jsx';


const SingleAlbum = ({album}) => {
  return (
        <div className="container-fluid center-block">
        <div className="col-xs-12">
        <div className="col-xs-4 thumb center-block">
          <Link to={`/albums/${album.id}`}><img src={album.imgURL} className="img-responsive center-block" /></Link>
          <Link to={`/albums/${album.id}`} className="col-xs-12" style={{textAlign: 'center', fontSize: '20px'}}>{album.name}</Link>
        </div>
        <div className="description">
        <h2><u>{album.name}</u></h2>
        <p>By {album.artistName} </p>
          <p className="lead">{album.description}</p>
          <br/>
          <h4>${album.price}</h4>
        <button className="btn btn-primary"><i className="fa fa-shopping-cart" /> Add to Cart </button>
        </div>
        </div>
        <div>
        <Review />
        </div>
      </div>
  );};
const mapStateToProps = ({albums}) => {
  return {
    album: albums[0] || {}
  };
};

// const mapDispatchToProps = (dispatch) => ({
//    loadAllAlbums: dispatch(loadAllAlbums()),
//});

export default connect(mapStateToProps)(SingleAlbum);
