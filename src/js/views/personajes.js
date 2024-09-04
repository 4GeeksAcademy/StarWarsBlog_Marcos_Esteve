import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [Datos_personajes, setDatos_personajes] = useState({}) 
	const character = store.characters.find((character, id) => id === parseInt(params.personaje_id));
	useEffect(()=>{
		fetch(`https://www.swapi.tech/api/people/${parseInt(params.personaje_id) + 1}`)
		.then((response) => response.json())
		.then ((data)=> {console.log (data.result.properties);
			setDatos_personajes(data.result.properties)
		})
	}, [params.personaje_id])
	return (
		<div className="jumbotron">
			<h1 className="display-4">{character ? character.name : "personaje no encontrado"}</h1>
			<hr className="my-4" />
			<p>Nuestro personaje tiene la posición en la api de: {parseInt(params.personaje_id)+1} </p>
			<p>Datos: {Datos_personajes.height} </p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Personajes.propTypes = {
	match: PropTypes.object
};
