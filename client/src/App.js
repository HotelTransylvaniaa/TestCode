import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register"; 
import Navbar from "./components/Navbar";
import Dashboard from "./admin/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
import DashboardSeller from "./admin/DashboardSeller";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hotels from "./booking/Hotels";
import HotelDetails from "./booking/HotelDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
       <Route exact path="/" element ={<Home/>}/>
       <Route path="/hotels" element ={<Hotels/>} />
       <Route path="/hotels/:city" element ={<Hotels/>} />
       <Route path="/hotel-details/:id" element ={<HotelDetails/>}/>
       <Route path="/login" element ={<Login/>} />
       <Route path="/register" element ={<Register/>} />
       <Route path="/dashboard" element ={<Dashboard/>} />
       <Route path="/dashboard/seller" element ={<DashboardSeller/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
