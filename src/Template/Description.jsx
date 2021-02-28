import React, { Component } from "react";

class Description extends Component {
	render() {
		return (
			<div id="hero" className="hero">
				<div className="container">
					<div className="row">
						<div className="col-md-6 text-right">
							<h1>Muhammad Iqbal</h1>
							<div className="page-scroll">
								<p className="job-title">Full Stack Developer</p>
							</div>
						</div>
						<div className="col-md-6 text-right">
							<img src="assets/img/iqbal.png" style={{ widht: "" }} alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Description;
