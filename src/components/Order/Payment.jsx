import React from 'react';

export default function PaymentInfo (){
	return(
		<div>
			<h2>Payment Information</h2>
			<h5>Name on Card</h5>
			<input />
			<h5>Card Number</h5>
			<input />
			<h5>Expiration Date</h5>
			<div className = "row">
				<select name = "month">
					<option value = "05">05</option>
					<option value = "06">06</option>
				</select>
				<select name = "year">
					<option value = "2017">2017</option>
					<option value = "2018">2018</option>
				</select>
			</div>
			<h5>Security Number</h5>
			<input />
		</div>
	);
}