import React, { Component } from "react";

class Footer extends Component {
	constructor(props) {
		const fullDate = new Date();

		super(props);
		this.state = {
			date: fullDate.getFullYear(),
		};
	}
	render() {
		return (
			<footer id="colophon" class="site-footer">
				<div class="container">
					<div class="row">
						<div class="col-sm-4 col-xs-12">
							<a
								class="icon gplus-bg"
								href="mailto: mhmmd.iqbal.june@gamil.com"
								// target="_blank"
							>
								<i class="icon-gplus"></i>
							</a>

							<a
								class="icon linkedin-bg "
								href="https://www.linkedin.com/in/mhmmd-iqbal"
								target="_black"
							>
								<i class="icon-linkedin"></i>
							</a>

							<a
								class="icon phone-bg "
								href="tel:+6282165678664"
								// target="_black"
							>
								<i class="fa fa-phone"></i>
							</a>
						</div>
						<div class="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
							<p class="copyright">Muhammad Iqbal @{this.state.date}</p>
						</div>
						<div class="col-sm-4 col-xs-3">
							<div class="text-right page-scroll">
								<a class="icon icon-up-bg" href="#hero">
									<i class="icon-up"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
