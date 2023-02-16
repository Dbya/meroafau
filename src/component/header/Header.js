import React from 'react'
import { Link } from "react-router-dom";
import { ArrowRightAltSharp } from "@mui/icons-material";

import "./header.css"

function Header() {
  return (
	<header className="header parallax-image">
			<section className="hero-content  py-5 px-3">
				<h2 className="hero-head text-light">
				 One shop for you to find all of your products
				</h2>
				<h6 className="mt-1">
					<Link
						to="/products"
						className="btn btn-primary btn-text-icon py-0-25 px-0-5 mt-1"
					>
						Shop Now!
						<span className="icon">
							<ArrowRightAltSharp style={{ fontSize: "2rem" }} />
						</span>
					</Link>
				</h6>
			</section>
		</header>
  )
}

export default Header