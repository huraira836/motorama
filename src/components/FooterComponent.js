import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props){
	return(
		<div className='footer'>
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-4">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li><Link to="/home">Home</Link></li>
							<li><Link to="/menu">Inventory</Link></li>
							
						</ul>
					</div>
					<div className="col-6 col-sm-4">
						<h5>Address</h5>
						<p><i className="fa fa-map-marker"></i>: Zarrar shaheed road, Lahore, Pakistan<br />
						<i className="fa fa-fax"></i>: +923096556561<br />
						<i className="fa fa-phone"></i>: +923096556561<br />
						<i className="fa fa-envelope"></i>: huraira.836@gmail.com</p>
					</div>
					<div className="col-12 col-sm-4 text-sm-center">
						<h5>Follow us on</h5>
						<a className="btn btn-social-icon btn-google" href="https://google.com"><i className="fa fa-google-plus"></i></a>
						<a className="btn btn-social-icon btn-facebook" href="https://facebook.com"><i className="fa fa-facebook"></i></a>
						<a className="btn btn-social-icon btn-linkedin" href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
						<a className="btn btn-social-icon btn-twitter" href="https://twitter.com"><i className="fa fa-twitter"></i></a>
						<a className="btn btn-social-icon btn-google" href="https://youtube.com"><i className="fa fa-youtube"></i></a>
					</div>
				</div>
				<br />
				<div className="row justify-content-center">
					<div className="col-auto">
						<p>@ Copyright 2020 </p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;