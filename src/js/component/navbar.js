import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light" style={{backgroundColor: "#f5f7fa"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 mx-4 h1"><img className="rounded-circle logo" src="https://i.pinimg.com/474x/a2/a2/27/a2a227afa5d96e329085b989357b1129.jpg"/></span>
			</Link>
			<div className="text-dark">
				<h1>STAR WARS</h1>
			</div>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary mx-4">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};


// #343a40