import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.js";



export const Home = () =>{
	const { store, actions } = useContext(Context);
	

 return (
	<div className=" min-vh-100 p-0 m-0" style={{backgroundColor: "#e9f0f5"}}>
		<div className="text-dark px-4 pt-4">
			<h2 style = {{fontFamily: "Orbitron"}}>Characters</h2>
		</div>
		<div className="row flex-row flex-nowrap  mt-4 px-4" style={{overflowX: "auto"}}>
			{store.characters.map((character, index)=>(
					<Card key={index}  name={character.name} index = {index} id={character.uid} route ="/personajes/"/>
			))}
		</div>
		<br/>
		<div className="text-dark px-4">
			<h2 style = {{fontFamily: "Orbitron"}}>StarShips</h2>
		</div>
		<div className="row flex-row flex-nowrap mt-4 px-4" style={{overflowX: "auto"}}>
			{store.starships.map((starship, index)=>(
						<Card key={index}  name={starship.name} index = {index} id={starship.uid} route ="/naves/" />
				))}
		</div>
		<br/>
	</div>
)};


// #2a3b47