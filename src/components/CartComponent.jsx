import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {removeFromCart, checkOut} from '../actions/cart';
import {keepRoute} from './AppContainer.jsx';

const CartRow = ({album: {id, imgURL, name, price}, remove}) => (<tr>
                          <td className="col-xs-6 col-md-4">
                                  <span className="media">
                                <Link to={`/albums/` + id}>
                                  <img className="img-thumb" width="80" height="80" src={imgURL} />
                                </Link>
                                </span>
                                 <button type="button" id="close" className="btn btn-info btn-sm" onClick={remove}>
                                  <span>X</span>
                                  </button>
                            </td>

                                  <td className="col-xs-2"><a href={'#/albums/' + id}>{name}</a></td>

                              <td className="col-sm-1 col-md-1 text-left"><strong>${(price * 1).toFixed(2)}</strong></td>
                    </tr>);
const Cart = ({firstName = 'Guest', albums = [], remove, checkOut}) => {
  const sub = albums.reduce((total, album) => (total + (album.price * 1)), 0).toFixed(2) || (0).toFixed(2);
  const tax = (0.07 * sub).toFixed(2);
  return (
    <div id="cart" className="container">
      <h2>{firstName}'s Cart:</h2>
      <br />
      <br />
      <div className="row1">
          <div className="col-sm-12 col-md-10 col-md-offset-1" style={{width: '100%'}}>
              <table className="table table-hover">
                  <thead className = "cart">
                      <tr>
                          <th>Album</th>
                          <th >Album Name</th>
                          <th>Price</th>
                      </tr>
                  </thead>
                  <tbody>
                  {albums.map(album => (<CartRow album={album} key={album.id} remove={remove(album)} />))}
                </tbody>
                 <tfoot>
                      <tr>
                          <td />
                          <td><h5>Subtotal<br />Tax</h5><h3>Total</h3></td>
                          <td className="text-right"><h5><strong>${sub}<br />${tax}</strong></h5><h3>${(sub * 1.07).toFixed(2)}</h3></td>
                      </tr>
                      <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td>
                          <button type="button" className="btn btn-warning" onClick={checkOut()}>
                           <i className="fa fa-credit-card-alt" aria-hidden="true" /> Checkout
                            <span className="glyphicon glyphicon-play" />
                          </button></td>
                      </tr>
                  </tfoot>
              </table>

      </div>
      </div>
  </div>
  );
};

const mapStateToProps = ({cart, loggedInUser}) => {
  return {
    firstName: loggedInUser.firstName,
    albums: cart.albums
  };
};

const mapDispatchToProps = dispatch => ({
  remove: album => (event) => {
    event.preventDefault();
    dispatch(removeFromCart(album));
  },
  checkOut: () => (event) => {
    keepRoute();
    event.preventDefault();
    dispatch(checkOut());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
