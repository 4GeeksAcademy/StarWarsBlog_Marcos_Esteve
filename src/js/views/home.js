import React from "react";
import {useState} from "react"
import "../../styles/home.css";
import reactDom from "react-dom";

export const Home = () =>{
	const [name, setName] = useState({})
	function verTodo() {
		fetch("https://www.swapi.tech/api/people/")
		.then((response) => response.json())
		.then((data) =>
			setName(data)) 
	}

 return (
	<div className="text-center mt-5 min-vh-100">
		<h1>Bienvenido</h1>
		<button onClick={()=> verTodo()}>Ver Todo</button>
		<p>Los personajes son: </p>
		{name}
	</div>
)};
