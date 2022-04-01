import './MainNav.css'
import NavSign from "./NavSign"
import NavAccount from "./NavAccount"
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
    const { auth } = useSelector((state) => ({ ...state }))

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand ms-4" to={"/"}>
                    <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" style={{ width: '75px' }} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item me-2 fs-5">
                        <Link className="nav-link"  to={"/"} exact="true">Home</Link>
                        </li>
                        <li className="nav-item me-2 fs-5">
                        <Link className="nav-link"  to={"/hotels"} exact="true">Hotels</Link>
                        </li>
                        <li className="nav-item me-2 fs-5">
                        <Link className="nav-link"  to={"/contact-us"} exact="true">Contact Us</Link>
                        </li>
                    </ul>
                    {/* <div className="navUl d-flex justify-content-center align-items-center me-auto">
                        <NavLink className="me-3 text-decoration-none" to={"/"} exact="true">Home</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={"/hotels"} exact="true">Hotels</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={""}>Resorts</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={""}>Today’s deals</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={""}>About</NavLink>
                        <NavLink className="me-3 text-decoration-none" to={"/contact-us"}>Contact Us</NavLink>
                    </div> */}
                    <div className="d-flex ms-auto">
                        {auth !== null && (<NavAccount />)}
                        {auth === null && (<NavSign />)}
                    </div>
                </div>
            </div>
        </nav>
    )
}