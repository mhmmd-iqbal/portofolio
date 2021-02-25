import React, { Component } from "react";

const Modal = (props) => {
	const showHideClassName = props.show ? "modal show" : "modal fade";

	return (
		<div id="portfolioItem1" className={showHideClassName} role="dialog">
			<div className="modal-dialog show">
				<div className="modal-content">
					<div className="modal-header">
						<a className="close" data-dismiss="modal">
							<span className="glyphicon glyphicon-remove"></span>
						</a>
						<img className="img-res" src="assets/img/portfolio-1.jpg" alt="" />
					</div>
					<div className="modal-body">
						<h4 className="modal-title">Project title</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							commodo finibus tristique. Maecenas dignissim condimentum sem eu
							tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
							urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
							turpis facilisis consectetur quis vel ante. Integer in massa ut
							nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante
							placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor
							non hendrerit.
						</p>
					</div>
					<div className="modal-footer">
						<a href="#" className="btn btn-fill">
							Visit Page
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
