import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.js";


export const Home = () =>{
	const { store, actions } = useContext(Context);

 return (
	<div className="text-center mt-5 min-vh-100">
		<h1>Bienvenido</h1>
		<p>Los personajes son: </p>
		<div className="d-flex flex-nowrap overflow-auto" >
			{store.characters.map((character, index)=>(
				<Card key={index} name={character.name}/>
			))}
		</div>
	</div>
)};
