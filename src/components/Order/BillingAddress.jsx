import React from 'react';

export default function BillingAddress (){
	return(
		<div>
			<h2>Bill Address</h2>
			<h5>First Name</h5>
			<input />
			<h5>Last Name</h5>
			<input />
			<h5>Address Line 1</h5>
			<input />
			<h5>Address Line 2</h5>
			<input />
			<div className = "row">
				<select name = "State">
					<option value = "CA">CA</option>
					<option value = "NY">NY</option>
				</select>
				<select name = "Country">
					<option value = "US">US</option>
					<option value = "China">China</option>
				</select>
			</div>
			<h5>Zip Code</h5>
			<input />			
		</div>
	);
}