import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import moment from 'moment';

const OrderRow = ({order: {id, price, completedDate}}) => (<tr>
                          <td className="col-xs-4 col-md-4">
                          <strong>{id}</strong>
                            </td>

                                  <td className="col-xs-2"><strong>${(price * 1).toFixed(2)}</strong></td>

                              <td className="col-sm-1 col-md-1 text-left"><strong>{moment(completedDate).format('MM/DD/YYYY')}</strong></td>
                    </tr>);
const Orders = ({firstName = 'Guest', orders = []}) => {
  return (
    <div id="cart" className="container">
      <h2>{firstName}'s Orders:</h2>
      <br />
      <br />
      <div className="row1">
          <div className="col-sm-12 col-md-10 col-md-offset-1" style={{width: '100%'}}>
              <table className="table table-hover">
                  <thead className = "cart">
                      <tr>
                          <th>Order Id</th>
                          <th >Price</th>
                          <th>completedDate</th>
                      </tr>
                  </thead>
                  <tbody>
                  {orders.map(order => (<OrderRow order={order} key={order.id} />))}
                </tbody>
              </table>
      </div>
      </div>
  </div>
  );
};

const mapStateToProps = ({loggedInUser}) => {
  return {
    firstName: loggedInUser.firstName,
    orders: loggedInUser.orders
  };
};


export default connect(mapStateToProps)(Orders);
