import React, { useContext } from "react"
import rigoBaby from "../../img/rigo-baby.jpg"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({name, index, route, id}) => {
    const {store, actions} = useContext(Context)
    const boton_icono = () =>{
        actions.love_icon(name);
    }

    return(
        <div className="card mx-2" style={{  backgroundColor: "#2e3b44", width: "18rem", boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)", border: "1px solid #c5a100" }}>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E083FF25E1A137E4A2205B2CA6B85FE883C142AA950A7DF3B0A75608765A861F/scale?width=440&aspectRatio=1.78&format=webp" className="card-img-top mt-2" style = {{objectFit: "cover"}} alt="Aquí debería haber pasado algo, ¿Qué tal si recargamos la página de nuevo?"/>
            <div className="card-body text-white">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between mt-2">
                    <Link to={route + index} >
                        <button className="btn btn-primary"> 
                            Learn More!
                        </button>
                    </Link>
                    <button className="btn btn-primary" onClick={()=> boton_icono()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card    