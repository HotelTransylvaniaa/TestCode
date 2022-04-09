import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/navbar/MainNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotels from "./booking/Hotels";
import HotelDetails from "./booking/HotelDetails";
import SearchResult from './booking/SearchResult'
import TopDestinationPage from "./booking/TopdestinationPage";
import ContactUs from './booking/contactus'
import NotFound from "./booking/NotFound";
import Profile from "./components/profile";
import Booking from "./components/mybooking";
import Footer from "./components/footer/footer";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
       <Route exact path="/" element ={<Home/>}/>
       <Route exact path="/hotels" element ={<Hotels/>} />
       <Route exact path="/hotels/city/:city" element ={<TopDestinationPage/>} />
       <Route exact path="/hotel-details/:id" element ={<HotelDetails/>}/>
       <Route exact path="/login" element ={<Login/>} />
       <Route exact path="/contact-us" element ={<ContactUs/>} />
       <Route exact path="/register" element ={<Register/>} />
       <Route exact path="/Profile" element ={<Profile/>} />
       <Route exact path="/Booking" element ={<Booking/>} />

       <Route exact path="/search-result" element ={<SearchResult/>} />
       <Route path={"*"} element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
