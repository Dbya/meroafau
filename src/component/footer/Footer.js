import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
	return (
		<footer
			className="footer"
			id="footer"
		>
			<div className="footer-wrapper">
				<div className="app-author-info  grid-item">
					<div className="app-info ">
						<Link
							to="/"
							className="brand-logo list-head"
						>
					Shopmart
						</Link>
						<p className="text-sm mt-0-5">
					A shop where you will get your products
						</p>
					</div>

					<div className="social-links">
						<a
							href="/#"
							target="_blank"
							className="link-hover"
						>
							<span className="icon">
								<i className="fab fa-twitter text-lg"></i>
							</span>
						</a>
						<a
							href="/#"
							target="_blank"
							className="link-hover"

						>
							<span className="icon">
								<i className="fab fa-github text-lg"></i>
							</span>
						</a>
						<a
							href="/#"
							target="_blank"
							className="link-hover"

						>
							<span className="icon">
								<i className="fab fa-linkedin text-lg"></i>
							</span>
						</a>
						<a
							href="/#"
							className="link-hover"
							target="_blank"
						>
							<span className="icon">
								<i className="fas fa-envelope text-lg"></i>
							</span>
						</a>
					</div>
				</div>
				<ul className="footer-item ">
					<li className="list-head text-lg">Quick Links</li>

					<li className="list-item">
						<ul className="list list-stacked list-style-none">
							<li className="list-item">
								<Link
									to="/profile"
									className="footer-quick-link"
								>
									Home
								</Link>
							</li>
							<li className="list-item">
								<Link
									to="/products"
									className="footer-quick-link"
								>
									Product
								</Link>
							</li>
							<li className="list-item">
								<Link to="/cart" className="footer-quick-link">
								Contact
								</Link>
							</li>
							<li className="list-item">
								<Link
									to="/wishlist"
									className="footer-quick-link"
								>
									Cart
								</Link>
							</li>
						</ul>
					</li>
				</ul>
				<ul className="footer-item2 ">
					<li className="list-head text-lg">Contact</li>
					<li className="list-item flex-row">
						<address className="text-sm">
						Butwal
						</address>
					</li>
					<li className="list-item text-sm flex-row mt-1">
						<span className="icon">
							<i className="fa-solid fa-phone text-sm flex-align-center"></i>
						</span>
						<span className="text-sm ml-0-25">+977 1234567890</span>
					</li>
				</ul>

				<div className="mt-1 pt-2 copyright-section text-center">
				
					<p className="author-portfolio-link">
						<span>
						
							<a
								href="/#"
								target="_blank"
							>
								© Shopmart 2023
							</a>
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
