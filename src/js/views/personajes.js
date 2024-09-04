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
		<div className="jumbotron mx-4">
			<h1 className="display-4">{character ? character.name : "personaje no encontrado"}</h1>
			<hr className="my-4" />
			<p>Nuestro personaje tiene la posición en la api de: {parseInt(params.personaje_id)+1} </p>
			<p>Datos: {Datos_personajes.height} </p>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<img src="tu-imagen.jpg" className="img-fluid w-100" alt="Descripción de la imagen"/>
					</div>
					<div className="col-12 col-md-6">
						<h2>Información del personaje</h2>
						<ul>
							<li><b>Height:</b> {Datos_personajes.height && Datos_personajes.height !== "n/a" ? Datos_personajes.height : "Lo siento, creo que es algo abstracto" } cm</li>
							<li><b>Mass:</b>Altura: {Datos_personajes.mass && Datos_personajes.mass !== "n/a" ? Datos_personajes.mass : "Al parecer, no pesa nada"} Kg</li>
							<li><b>Hair Color:</b> {Datos_personajes.hair_color && Datos_personajes.hair_color !== "n/a" ? Datos_personajes.hair_color : "No tiene color de pelo"}</li>
							<li><b>Skin Color:</b> {Datos_personajes.skin_color && Datos_personajes.skin_color !== "n/a" ? Datos_personajes.skin_color : "No tiene piel"}</li>
						</ul>
					</div>
				</div>
			</div>

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
