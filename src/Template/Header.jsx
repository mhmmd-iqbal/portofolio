import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<header
				id="masthead"
				className="site-header"
				data-anchor-target=".hero"
				data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);"
				data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
			>
				<nav id="primary-navigation" className="site-navigation">
					<div className="container">
						<div className="navbar-header page-scroll">
							<button
								type="button"
								className="navbar-toggle collapsed"
								data-target="#portfolio-perfect-collapse"
								aria-expanded="false"
							>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>

							<a href="#hero" className="site-logo">
								{/* <img src="./assets/img/logo.png" alt="logo" /> */}
							</a>
						</div>

						<div className="main-menu" id="portfolio-perfect-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li className="page-scroll">
									<a href="#hero">Home</a>
								</li>
								<li className="page-scroll">
									<a href="#about">About</a>
								</li>
								<li className="page-scroll">
									<a href="#background">Background</a>
								</li>
								<li className="page-scroll">
									<a href="#portfolio">Portfolio</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
