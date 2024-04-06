import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Nave = (props) => {
	return (
		<div className="card" style={{width: "18rem"}}>
			<img src={rigoImage} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
                <h5 className="card-title">{props.model}</h5>
                <h5 className="card-title">{props.uid}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link className="btn btn-primary" to={"/nave/" + props.uid }>
                    <span>Ver mas</span>
                </Link>
			</div>
		</div>
	);
};
