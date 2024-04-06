import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
    const [detalles,setDetalles] = useState({})
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/starships/' + params.nave_id )
        .then( (response)=>response.json() )
        .then( (data)=> setDetalles(data.result.properties) )        
    },[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">Nave This will show the demo element: {params.nave_id}</h1>

			<hr className="my-4" />
            
            <p>Name : {detalles.name}</p>
            <p>Manufacturerl : {detalles.manufacturer}</p>
            <p>Model : {detalles.model}</p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Nave.propTypes = {
	match: PropTypes.object
};
