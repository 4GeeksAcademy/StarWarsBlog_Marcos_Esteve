import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const trash_botton = (name) => {
	const nuevosFavoritos = store.favorites.filter(favorito => favorito !== name);
		actions.setFavorites(nuevosFavoritos)
	}
	return (
		<nav className="navbar navbar-light" style={{backgroundColor: "#f5f7fa"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 mx-4 h1"><img className="rounded-circle logo" src="https://i.pinimg.com/474x/a2/a2/27/a2a227afa5d96e329085b989357b1129.jpg"/></span>
			</Link>
			<div className="text-dark">
				<h1 style={{fontFamily: "Orbitron"}}>STAR WARS</h1>
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle mx-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.length > 0 ? (
							store.favorites.map((elemento, index) => (
								<li key={index}>
									<div className="d-flex justify-content-between justify-content-between align-items-center">
										<a className="dropdown-item" href="#">
											{elemento}
										</a>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16" onClick={()=> trash_botton(elemento)}>
										<path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
										</svg>

									</div>
								</li>
							))
						) : (
							<li>
								<a className="dropdown-item" href="#">Sin favoritos</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};


// #343a40