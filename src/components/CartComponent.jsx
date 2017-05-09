import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const CartRow = ({album: {id, imgURL, name, price}}) => (<tr>
                          <td className="col-xs-6 col-md-4">
                                  <span className="media">
                                <Link to={`/albums/` + id}>
                                  <img className="img-thumb" width="80" height="80" src={imgURL} />
                                </Link>
                                </span>
                                 <button type="button" id="close" className="btn btn-info btn-sm">
                                  <span>X</span>
                                  </button>
                            </td>

                                  <td className="col-xs-2"><a href={'#/albums/' + id}>{name}</a></td>

                              <td className="col-sm-1 col-md-1 text-left"><strong>${(price * 1).toFixed(2)}</strong></td>
                    </tr>);
const Cart = ({firstName = 'Guest', albums = []}) => {
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
                  {albums.map(album => (<CartRow album={album} key={album.id} />))}
                </tbody>
                 <tfoot>
                      <tr>
                          <td />
                          <td />
                          <td />
                          <td><h5>Subtotal<br />Tax</h5><h3>Total</h3></td>
                          <td className="text-right"><h5><strong>${sub}<br />${tax}</strong></h5><h3>${(sub * 1.07).toFixed(2)}</h3></td>
                      </tr>
                      <tr>
                          <td />
                          <td />
                          <td />
                          <td>
                          <button type="button" className="btn btn-default">
                              <Link to={`/albums`}><span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping </Link>
                          </button></td>
                          <td>
                          <button type="button" className="btn btn-warning">
                           <Link to="/cart/checkout"><i className="fa fa-credit-card-alt" aria-hidden="true" /> Checkout</Link>
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
export default connect(mapStateToProps)(Cart);
