import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/navbar/MainNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotels from "./booking/Hotels";
import HotelDetails from "./booking/HotelDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />}  />
        <Route path="/hotels/city/:city" element={<Hotels/>}  />
        <Route path="/hotel-details/:id" element={<HotelDetails />}/>
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
