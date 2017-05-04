import React, { PropTypes } from 'react';
import { render } from "react-dom";
import { Link } from "react-router";
import { connect } from "react-redux";
import { selectLoading, selectSingleAlbum } from '../selectors/albums';
import { loadSingleAlbums } from '../reducer/albumsreducer';

class SingleAlbum extends React.Component {
  componentDidMount() {
    const { loading, albums, loadSingleAlbums } = this.props;

    if (!loading && albums.length === 0) {
      loadSingleAlbums();
    }
  }

  render() {
    const { loading, albums } = this.props;

    return (
      <div className="container-fluid center-block">
        {loading && (
          <h4>Loading...</h4>
        )}
        <div className="col-xs-12">
          {albums.map(({ id, imgURL, name }) => (
              <div key={id} className="col-xs-4 thumb center-block">
                <Link to={`/albums/${id}`}><img src={imgURL} className="img-responsive center-block" /></Link>
                <Link to={`/albums/${id}`} className="col-xs-12" style={{textAlign: 'center', fontSize: '20px'}}>{name}</Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

SingleAlbum.displayName = 'SingleAlbum';
SingleAlbum.propTypes = {
  loading: PropTypes.bool,
  albums: PropTypes.array,
  params: PropTypes.shape({
      albumId: PropTypes.string,
  }),
  loadSingleAlbums: PropTypes.func,
};
SingleAlbum.defaultProps = {
  albums: [],
};


const mapStateToProps = (state, ownProps) => ({
    loading: selectLoading(state),
    albums: selectSingleAlbum(state, parseInt(ownProps.params.albumId, 10)),
});

// const mapDispatchToProps = (dispatch) => ({
//    loadAllAlbums: dispatch(loadAllAlbums()),
//});

export default connect(mapStateToProps, { loadSingleAlbums })(SingleAlbum);
