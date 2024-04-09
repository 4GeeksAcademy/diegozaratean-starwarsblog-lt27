import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/nave";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div className="text-center mt-5" >
			
			<h1>naves desde flux!</h1>

			<div className=" row flex-row flex-nowrap" style={{overflowX: 'auto'}}>
				{store.naves.map( (elemento)=> <Nave key={elemento.url} uid={elemento.url.replace('https://swapi.dev/api/starships/','').replace('/','')} titulo={elemento.name} model={elemento.model} /> )}
			</div>



		</div>
	);

} 