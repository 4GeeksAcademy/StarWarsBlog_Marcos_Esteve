import React from "react"

const Card = ({name}) => {

    return(
        <div className="card mx-2" style={{ width: "18rem" }}>
            <img src="https://starwars-visualguide.com/#/characters/1" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Hola.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default Card    