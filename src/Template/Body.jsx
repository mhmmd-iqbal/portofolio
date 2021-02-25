import React, { Component } from "react";
import Description from "./Description";
import Main from "./Main";

class Body extends Component {
	render() {
		return (
			<div>
				<Description></Description>
				<Main></Main>
			</div>
		);
	}
}

export default Body;
