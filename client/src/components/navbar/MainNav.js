import './MainNav.css'
import NavSign from "./NavSign"
import NavAccount from "./NavAccount"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar(){
    const {auth}=useSelector((state)=>({...state}))

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <NavLink className="navbar-brand ms-4" to={"/"}>
                    <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" style={{width:'75px'}} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                
                    <div className="navUl d-flex justify-content-center align-items-center me-auto">
                        <NavLink className="me-3 text-decoration-none" to={"/"} exact="true">Home</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={"/hotels"} exact="true">Hotels</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={""}>Resorts</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={""}>Today’s deals</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={""}>About</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={""}>Contact Us</NavLink>
                    </div>
                    <div className="d-flex">
                        {auth!==null &&(<NavAccount/>)}
                        {auth===null &&(<NavSign/>)}
                    </div> 
                </div>
            </div>
        </nav>
    )
}