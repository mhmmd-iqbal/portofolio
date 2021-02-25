import React, { Component } from "react";

class Portofolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	openModal = (e) => {
		e.preventDefault();
		this.setState({
			show: true,
		});
	};
	render() {
		return (
			<div>
				<div className="col-md-4 col-xs-6">
					<div className="portfolio-item">
						<img src={this.props.data.image} className="img-res" alt="" />
						<div className="portfolio-item-info">
							<h4>{this.props.data.name}</h4>
							<a data-toggle="modal" onClick={this.openModal}>
								<span className="glyphicon glyphicon-eye-open"></span>
							</a>
							<a href="#">
								<span className="glyphicon glyphicon-link"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Portofolio;
