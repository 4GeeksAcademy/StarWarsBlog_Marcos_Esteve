import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [Datos_planets, setDatos_planets] = useState({}) 
	const planet = store.planets.find((planet, id) => id === parseInt(params.planets_id));
	const nameplanet = planet ? planet.name : ""
	useEffect(()=>{
		fetch(`https://www.swapi.tech/api/planets/${parseInt(params.planets_id) + 1}`)
		.then((response) => response.json())
		.then ((data)=> {console.log (data.result.properties);
			setDatos_planets(data.result.properties)
		})
	}, [params.planets_id])
	return (
		<div className="jumbotron mx-4 min-vh-100">
			<h1 className="display-4">{planet ? planet.name : "personaje no encontrado"}</h1>
			<hr className="my-4" />
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<img src="https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C40%2C1280%2C640" className="img-fluid w-100" alt="Descripción de la imagen"/>
					</div>
					<div className="col-12 col-md-6">
						<h2>Información de la nave </h2>
						<ul>
							<li><b>Climate:</b> {Datos_planets.climate && Datos_planets.climate !== "n/a" && Datos_planets.climate !=="none" ? Datos_planets.climate : "LA fabricaron a mano" } </li>
							<li><b>Gravity:</b> {Datos_planets.gravity && Datos_planets.gravity !== "n/a" && Datos_planets.gravity !=="none" ? Datos_planets.gravity : "No está registrada la nave"}</li>
							<li><b>Orbital Period:</b> {Datos_planets.orbital_period && Datos_planets.orbital_period !== "n/a" && Datos_planets.orbital_period !=="none" ? parseInt(Datos_planets.orbital_period).toLocaleString() : "Al parecer, solo lleva carga"} </li>
							<li><b>Rotation Period:</b> {Datos_planets.rotation_period && Datos_planets.rotation_period !== "n/a" && Datos_planets.rotation_period !=="none" ? Datos_planets.rotation_period : "Información no disponible"}</li>
                            <li><b>Terrain:</b> {Datos_planets.terrain && Datos_planets.terrain !== "n/a" && Datos_planets.terrain !=="none" ? Datos_planets.terrain : "Apenas coge velocidad"}</li>
							<li><b>Population:</b> {Datos_planets.population && Datos_planets.population !== "n/a" && Datos_planets.population !=="none" ? parseInt(Datos_planets.population).toLocaleString() : "O lleva sólo pasajeros, o no hay info"}</li>
							<li><b>Diameter:</b> {Datos_planets.diameter && Datos_planets.diameter !== "n/a" && Datos_planets.diameter !=="none" ? parseInt(Datos_planets.diameter).toLocaleString() : "¿Gratis? Nunca se sabe"} </li>
							<li><b>Description:</b> {store.description_planetas.find(planet => planet.name === nameplanet)?.description || "Descripción no disponible"}</li>
						</ul>
						<hr className="my-4" />
						<div className="mt-auto">
							<Link to="/home">
								<span className="btn btn-primary btn-lg mt-2" href="#" role="button">
									Volver al listado
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-4" />
		</div>
	);
};

Planetas.propTypes = {
	match: PropTypes.object
};