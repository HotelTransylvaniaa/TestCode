import './NavSign.css'
import { NavLink } from "react-router-dom";
export default function NavSign(){
    return(
        <div className='navSign'>
        <NavLink className="text-decoration-none d-inline-block py-2 px-2 border border-primary border-1 rounded me-1" to={"/register"}>Register</NavLink>
        <NavLink className="text-decoration-none d-inline-block py-2 px-2 border border-primary border-1 rounded ms-1" to={"/login"}>Login</NavLink>
        </div>
    )
}