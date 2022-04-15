import './MainNav.css'
import NavSign from "./NavSign"
import NavAccount from "./NavAccount"
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
    const { auth } = useSelector((state) => ({ ...state }))

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-z">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand mx-auto ps-3" to={"/"}>
                    <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" style={{ width: '75px' }} />
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ps-5 mb-2 mb-lg-0 w-100">
                        <li className="nav-item me-2 fs-5">
                            <Link className="nav-link" to={"/"} exact="true">Home</Link>
                        </li>
                        <li className="nav-item me-2 fs-5">
                            <Link className="nav-link" to={"/hotels"} exact="true">Hotels</Link>
                        </li>
                        <li className="nav-item me-2 fs-5 me-auto">
                            <Link className="nav-link" to={"/contact-us"} exact="true">Contact us</Link>
                        </li>
                        <li className="nav-item my-auto">
                            {auth !== null && (<NavAccount />)}
                            {auth === null && (<NavSign />)}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}