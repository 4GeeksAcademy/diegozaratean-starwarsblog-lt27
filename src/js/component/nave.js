import React , { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Nave = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card mx-3" style={{width: "18rem"}}>
			<img src={rigoImage} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
                <h5 className="card-title">{props.model}</h5>
                <h5 className="card-title">{props.uid}</h5>
				<p className="card-text">Some content.</p>
                <Link className="btn btn-primary" to={"/nave/" + props.uid }>
                    <span>Ver mas</span>
                </Link>
				<button onClick={()=>actions.cambiarTexto(props.titulo)}>Cambiar texto</button>
			</div>
		</div>
	);
};
