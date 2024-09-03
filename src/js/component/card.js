import React from "react"
import rigoBaby from "../../img/rigo-baby.jpg"
import { Link } from "react-router-dom";

const Card = ({name, index}) => {

    return(
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={rigoBaby} className="card-img-top" alt="Aquí debería haber pasado algo"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Hola.</p>
                
                <Link to={"/personajes/" + index} >
                    <button className="btn btn-primary"> 
                        Go somewhere
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Card    