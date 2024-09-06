import React from "react"
import rigoBaby from "../../img/rigo-baby.jpg"
import { Link } from "react-router-dom";

const Card = ({name, index, route, id}) => {

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
                    <button className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card    