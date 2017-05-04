import React, { PropTypes } from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import { connect } from "react-redux";
import { selectLoading, selectAlbumsByGenre } from '../selectors/albums';
import { loadAllAlbums } from '../reducer/albumsreducer';

class GenreAlbums extends React.Component {
  componentDidMount() {
    const { loading, albums, loadAllAlbums } = this.props;

    if (!loading && albums.length === 0) {
      loadAllAlbums();
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
          {albums.map(({ id, imgURL}) => (
              <div key={id} className="col-xs-4 thumb center-block">
                <Link to={`/albums/${id}`}>
                  <img src={imgURL} className="img-responsive center-block"/>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

GenreAlbums.displayName = 'GenreAlbums';
GenreAlbums.propTypes = {
  loading: PropTypes.bool,
  albums: PropTypes.array,
  params: PropTypes.shape({
      genreId: PropTypes.string,
  }),
  loadAllAlbums: PropTypes.func,
};
GenreAlbums.defaultProps = {
  albums: [],
};


const mapStateToProps = (state, ownProps) => ({
    loading: selectLoading(state),
    albums: selectAlbumsByGenre(state, parseInt(ownProps.params.genreId, 10)),
});

// const mapDispatchToProps = (dispatch) => ({
//    loadAllAlbums: dispatch(loadAllAlbums()),
//});

export default connect(mapStateToProps, { loadAllAlbums })(GenreAlbums);
