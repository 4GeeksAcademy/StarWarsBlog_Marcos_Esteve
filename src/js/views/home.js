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
		<div className="row flex-row flex-nowrap " style={{overflowX: "auto"}}>
			{store.characters.map((character, index)=>(
					<Card key={index}  name={character.name}/>
			))}
		</div>
		<br/>
		<div>
			Hola
		</div>
	</div>
)};
