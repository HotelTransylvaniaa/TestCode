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
import SearchResult from './components/hotels/SearchResult'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
       <Route exact path="/" element ={<Home/>}/>
       <Route exact path="/hotels" element ={<Hotels/>} />
       <Route exact path="/hotels/:city" element ={<Hotels/>} />
       <Route exact path="/hotel-details/:id" element ={<HotelDetails/>}/>
       <Route exact path="/login" element ={<Login/>} />
       <Route exact path="/register" element ={<Register/>} />
       <Route exact path="/dashboard" element ={<Dashboard/>} />
       <Route exact path="/search-result" element ={<SearchResult/>} />
       <Route exact path="/dashboard/seller" element ={<DashboardSeller/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
