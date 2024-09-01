import React from "react"
import rigoBaby from "../../img/rigo-baby.jpg"

const Card = ({name}) => {

    return(
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src={rigoBaby} className="card-img-top" alt="Aquí debería haber pasado algo"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Hola.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default Card    