import React, { Component } from "react";

const Skill = (props) => {
	return (
		<div className="col-md-4" style={{ paddingBottom: "50px" }}>
			<div className="skill">
				<h4>{props.data.name}</h4>
				<div className="progress">
					<div
						className="progress-bar"
						role="progressbar"
						data-transitiongoal={props.data.range}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
