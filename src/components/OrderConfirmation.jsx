import React from 'react';
//import { browserHistory } from 'react-router';


export default function OrderConfirmation () {

  const style = {
    width: '100%',
    margin: 20
  }

  const headerStyle = {
    padding: 20,
  }

   return ( 
                <div className="panel panel-info">
                    <div className="panel-heading">Thanks for your order! </div>
                    <div className="panel-body">
                    <p>Hope you enjoyed your shopping experiences in Durrok Fompay!</p>
                    </div>
                        <table className = "table-order" >
                            <thead>
                            <tr>
                                <th>Order</th>
                                <th>Album</th>
                                <th >ArtistName</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Joanne</td>
                                <td>Lady Gaga</td>
                                <td>$8.99</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

  )
}

