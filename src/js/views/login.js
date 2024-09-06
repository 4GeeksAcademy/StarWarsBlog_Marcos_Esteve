import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Login = () =>{
	const { store, actions } = useContext(Context);
	

 return (
	<div className="container-fluid min-vh-100 p-0 m-0 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#e9f0f5" }}>
    <div className="row w-100">
        <form className="col-12 col-md-4 mx-auto">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" style = {{fontFamily: "Orbitron"}}>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" style = {{fontFamily: "Orbitron"}}>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <Link to="/home">
                <button type="submit" className="btn btn-primary w-100" style = {{fontFamily: "Orbitron"}}>Submit</button>
            </Link>
        </form>
    </div>
</div>
)};
