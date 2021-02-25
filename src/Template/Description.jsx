import React, { Component } from "react";

class Description extends Component {
	render() {
		return (
			<div id="hero" className="hero">
				<div className="container">
					<div className="row">
						<div
							className="col-md-6 text-right"
							style={{ paddingTop: "500px" }}
						>
							<h1>Muhammad Iqbal</h1>
							<div className="page-scroll">
								<p className="job-title">Full Stack Developer</p>
							</div>
						</div>

						<div className="col-md-6 text-left">
							<img src="assets/img/alex-vidal.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Description;
