import React from "react"
import rigoBaby from "../../img/rigo-baby.jpg"
import { Link } from "react-router-dom";

const Card = ({name, index, route, id}) => {

    return(
        <div className="card mx-2" style={{  backgroundColor: "#2e3b44", width: "18rem", boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)", border: "1px solid #c5a100" }}>
            <img src={rigoBaby} className="card-img-top" alt="Aquí debería haber pasado algo, ¿Qué tal si recargamos la página de nuevo?"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Hola.</p>
                <p>Hola, soy el id: {id}</p>
                
                <Link to={route + index} >
                    <button className="btn btn-primary"> 
                        Learn More!
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Card    