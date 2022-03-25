import './NavAccount.css'
import { NavLink } from "react-router-dom";
import {useDispatch } from "react-redux";
export default function NavAccount(){
    const dispatch=useDispatch()
    const logout=()=>{
        dispatch({
        type:"LOGOUT",
        payload:null
        })
        window.localStorage.removeItem("auth")
    }
    return(
        <div className="ms-1 d-flex">
            <div className="alpha-name d-flex justify-content-center align-items-center">
                <span className="alpha d-flex rounded-pill me-1 justify-content-center align-items-center fw-bold text-white fs-5">A</span>
                <span>Ahmed B.</span>
            </div>
            <div className="dropdown">
                <button className="border-0 bg-white pt-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className='me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                    </svg>
                </span>
                <span className="me-1">&#36;0</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-start mt-3 pt-0" aria-labelledby="dropdownMenuButton1">
                    <li className="px-4 py-2 bg-light text-secondary">MY ACCOUNT</li>
                    <li>
                        <NavLink className="text-decoration-none px-4 py-2" to={""}>My Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none px-4 py-2" to={""}>Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none px-4 py-2" to={""}>Profile</NavLink>
                    </li>
                    <li className="px-4 pt-2">
                        <NavLink className="text-decoration-none d-inline-block py-2 px-2 border border-primary border-1 rounded w-100 text-center pointer" to={""} onClick={logout}>Sign Out</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}