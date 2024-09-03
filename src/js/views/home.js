import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.js";



export const Home = () =>{
	const { store, actions } = useContext(Context);
	

 return (
	<div className="mx-4 min-vh-100">
		<div>
			<h1>Characters</h1>
		</div>
		<div className="row flex-row flex-nowrap mt-4" style={{overflowX: "auto"}}>
			{store.characters.map((character, index)=>(
					<Card key={index}  name={character.name} index={index}/>
			))}
		</div>
		<br/>
		<div>
			<h1>StarShips</h1>
		</div>
		<div className="row flex-row flex-nowrap mt-4" style={{overflowX: "auto"}}>
			{store.starships.map((character, index)=>(
						<Card key={index}  name={character.name} index={index}/>
				))}
		</div>
	</div>
)};
