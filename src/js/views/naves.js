import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Naves = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log (params);
	const starship = store.starships.find((starship, id) => id === parseInt(params.nave_id));

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.nave_id}</h1>
			<p>El nombre es: {starship ? starship.name : "personaje no encontrado" } </p>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Naves.propTypes = {
	match: PropTypes.object
};
