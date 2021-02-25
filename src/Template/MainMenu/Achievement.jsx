import React, { Component } from "react";

const Achievemnt = (props) => {
	return (
		<div class="col-sm-4">
			<div class="service">
				<img src="assets/img/front-end.svg" alt="Front End Developer" />
				<h4>{props.data.name}</h4>
				<p>{props.data.status}</p>
				<p>{props.data.year}</p>
			</div>
		</div>
	);
};

export default Achievemnt;
