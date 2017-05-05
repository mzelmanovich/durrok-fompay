import React from 'react';

export default function OrderItem ({url}){
	return(
		<div className = "row">
			<div className = "col-sm-4" >
				<img src= {url} width="100px" height="100px" />
			</div>
			<div className = "col-sm-4" >
				<ul>album name</ul>
			</div>
			<div className = "col-sm-4" >
				<ul>album price</ul>
			</div>
		</div>
	);
}