import React from 'react';
import {Link} from 'react-router';

export default function Cart ()  {

  return (
    <div id="cart" className="container">
      <h2>Summer's Cart:</h2>
      <br />
      <br />
      <div className="row1">
          <div className="col-sm-12 col-md-10 col-md-offset-1" style={{width:'100%'}}>
              <table className="table table-hover">
                  <thead className = "cart">
                      <tr>
                          <th>Album</th>
                          <th >Album Name</th>
                          <th>Pirce</th>
                          <th>Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="col-xs-6 col-md-4">
                                  <span className="media">
                                <Link to={`/albums/6`}>
                                  <img className="img-thumb" width="80" height="80" src="https://images-na.ssl-images-amazon.com/images/I/41WNJweHfkL._SS500.jpg"/>
                                </Link>
                                </span>
                                 <button type="button" id="close" className="btn btn-info btn-sm">
                                  <span>X</span>
                                  </button>
                            </td>
                                
                                  <td className="col-xs-2"><a href="#/albums/6">Joanne</a></td>
                          
                              <td className="col-sm-1 col-md-1 text-left"><strong>$8.99</strong></td>
                              <td className="col-sm-1 col-md-1 text-left"><strong>$8.99</strong></td>
                             
                    </tr>
                </tbody>
                 <tfoot>
                      <tr>
                          <td>   </td>
                          <td>   </td>
                          <td>   </td>
                          <td><h5>Subtotal<br />Estimated shipping fee</h5><h3>Total</h3></td>
                          <td className="text-right"><h5><strong>$8.99<br />$8.99</strong></h5><h3>$8.99</h3></td>
                      </tr>
                      <tr>
                          <td>   </td>
                          <td>   </td>
                          <td>   </td>
                          <td>
                          <button type="button" className="btn btn-default">
                              <Link to={`/albums`}><span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping </Link>
                          </button></td>
                          <td>
                          <button type="button" className="btn btn-warning">
                           <Link to="/cart/checkout"><i className="fa fa-credit-card-alt" aria-hidden="true"/> Checkout</Link>
                            <span className="glyphicon glyphicon-play" />
                          </button></td>
                      </tr>
                  </tfoot>
              </table>
          
      </div>
      </div>
  </div>
  )
}

