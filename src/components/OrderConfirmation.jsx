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
                <div className="order panel-info">
                    <div className="panel-heading">Thanks for your order! </div>
                    <div className="panel-body">
                    <p>Hope you enjoyed your shopping at Durrok Fompay!</p>   
                    <p> Your order #12345 is completed on 2017/05/09</p>               
                  </div>
                 </div>

  )
}

