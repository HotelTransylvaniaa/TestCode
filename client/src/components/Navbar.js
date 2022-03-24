import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
export default function Navbar(){
  const dispatch=useDispatch()
  const {auth}=useSelector((state)=>({...state}))
  const logout=()=>{
    dispatch({
      type:"LOGOUT",
      payload:null
    })
    window.localStorage.removeItem("auth")
  }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient sticky-top ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>Home</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"  activeclassname="activeRoute"
                   activestyle={{ color: 'red' }} to={"/"} exact={true}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"  activeclassname="activeRoute"
                   activestyle={{ color: 'red' }} to={"/hotels"} exact={true}>Hotels</NavLink>
              </li>
              {auth!==null &&(
             <li className="nav-item">
                <a className="nav-link order-3 pointer" onClick={logout}>Logout</a></li>
                
              )}
              {auth===null &&(
                <>
                 <li className="nav-item">
                <NavLink className="nav-link order-3" to={"/register"} activeclassname="activeRoute"
                    activestyle={{ color: 'red' }}>Register</NavLink></li>
                <li className="nav-item">
                <NavLink className="nav-link" to={"/login"} activeclassname="activeRoute"
                  activestyle={{ color: 'red' }}>Login</NavLink></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    )
}