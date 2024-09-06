import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Naves = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [Datos_starships, setDatos_starships] = useState({}) 
	const starship = store.starships.find((starship, id) => id === parseInt(params.nave_id));
	const namestarship = starship ? starship.name : ""
	useEffect(()=>{
		fetch(`https://www.swapi.tech/api/starships/${parseInt(params.nave_id) + 2}`)
		.then((response) => response.json())
		.then ((data)=> {console.log (data.result.properties);
			setDatos_starships(data.result.properties)
		})
	}, [params.nave_id])
	return (
		<div className="jumbotron mx-4 min-vh-100">
			<h1 className="display-4">{starship ? starship.name : "personaje no encontrado"}</h1>
			<hr className="my-4" />
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<img src="https://media.revistagq.com/photos/604b2f499fc97c95e82c1c14/master/pass/2101913.jpg" className="img-fluid w-100" alt="Descripción de la imagen"/>
					</div>
					<div className="col-12 col-md-6">
						<h2>Información de la nave </h2>
						<ul>
							<li><b>Manufacturer:</b> {Datos_starships.manufacturer && Datos_starships.manufacturer !== "n/a" && Datos_starships.manufacturer !=="none" ? Datos_starships.manufacturer : "LA fabricaron a mano" } </li>
							<li><b>Model:</b> {Datos_starships.model && Datos_starships.model !== "n/a" && Datos_starships.model !=="none" ? Datos_starships.model : "No está registrada la nave"}</li>
							<li><b>Passengers:</b> {Datos_starships.passengers && Datos_starships.passengers !== "n/a" && Datos_starships.passengers !=="none" ? Datos_starships.passengers : "Al parecer, solo lleva carga"} </li>
							<li><b>Consumables:</b> {Datos_starships.consumables && Datos_starships.consumables !== "n/a" && Datos_starships.consumables !=="none" ? Datos_starships.consumables : "Información no disponible"}</li>
							<li><b>Hyperdrive_rating:</b> {Datos_starships.hyperdrive_rating && Datos_starships.hyperdrive_rating !== "n/a" && Datos_starships.hyperdrive_rating !=="none" ? Datos_starships.hyperdrive_rating : "Apenas coge velocidad"}</li>
							<li><b>Cargo Capacity:</b> {Datos_starships.cargo_capacity && Datos_starships.cargo_capacity !== "n/a" && Datos_starships.cargo_capacity !=="none" ? parseInt(Datos_starships.cargo_capacity).toLocaleString() : "O lleva sólo pasajeros, o no hay info"} Kg</li>
							<li><b>Cost in Credits:</b> {Datos_starships.cost_in_credits && Datos_starships.cost_in_credits !== "n/a" && Datos_starships.cost_in_credits !=="none" ? parseInt(Datos_starships.cost_in_credits).toLocaleString() : "¿Gratis? Nunca se sabe"} Credits</li>
							<li><b>Length:</b> {Datos_starships.length && Datos_starships.length !== "n/a" && Datos_starships.length !=="none" ? parseInt(Datos_starships.length).toLocaleString() : "Sin distancia... en"} m</li>
							<li><b>Description:</b> {store.description_starships.find(starship => starship.name === namestarship)?.description || "Descripción no disponible"}</li>
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

Naves.propTypes = {
	match: PropTypes.object
};
