import React from 'react';
import OrderItem from './OrderItem'

export default function OrderList (prop){
	return(
		<div>
			<h2>Order Summary</h2>
			{prop.urls.map((url)=><ul><OrderItem url={url}/></ul>)}
			<div className = "row">
				<ul className = "col-md-8">Subtotal</ul>
				<ul className = "col-md-4">80.00</ul>
			</div>
			<div className = "row">
				<ul className = "col-md-8">Extimated Tax</ul>
				<ul className = "col-md-4">7.20</ul>
			</div>
			<div className = "row">
				<ul className = "col-md-8">Total</ul>
				<ul className = "col-md-4">87.20</ul>
			</div>
			<button className = "well">Submit Order</button>
		</div>
	);
}