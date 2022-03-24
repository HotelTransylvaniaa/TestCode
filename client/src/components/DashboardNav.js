import { Link, NavLink } from "react-router-dom";

export default function DashboardNav(){
    const active=window.location.pathname;
    return(
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={`nav-link ${active==="/dashboard" && "active"}`} to={"/dashboard"}>Your booking</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${active==="/dashboard/seller" && "active"}`} to={"/dashboard/seller"}>Your Hotels</Link>
            </li>
        </ul>
        </>
    )
}