import './NavAccount.css'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
export default function NavAccount() {
    const { auth } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch()
    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null
        })
        window.localStorage.removeItem("auth")
    }
    useEffect(() => {
        console.log(auth.userName, "in ues effect")
    }, [auth.userName])
    return (
        <>
            <div className="dropdown">
                <button className="border-0 bg-white pt-1 alpha-name d-flex justify-content-center align-items-center" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="alpha d-flex rounded-pill me-1 justify-content-center align-items-center fw-bold text-white fs-5 text-capitalize">{auth.userName.charAt(0)}</span>
                    <span className='text-capitalize'>{auth.userName}</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                    </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end mt-3 pt-0" aria-labelledby="navbarDropdown">
                    <li className="px-4 py-2 bg-light text-secondary">MY ACCOUNT</li>
                    <li>
                        <NavLink className="text-decoration-none px-4 py-2" to={""}>My Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-decoration-none px-4 py-2" to={"profile"}>Profile</NavLink>
                    </li>
                    <li className="px-4 pt-2">
                        <NavLink className="text-decoration-none d-inline-block py-2 px-2 border border-primary border-1 rounded w-100 text-center pointer" to={""} onClick={logout}>Sign Out</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}