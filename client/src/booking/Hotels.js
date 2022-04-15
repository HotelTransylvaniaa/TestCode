import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelCard from "../components/cards/HotelCard";
import queryString from "query-string";
import { getSearchHotel } from "../store/actions/hotels";
import { getHotelsList } from "../store/actions/hotels";
import Search from "../components/Forms/search";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";


export default function Hotels() {
  const  {search}  = useLocation();
  let hotels = useSelector((state) => state.hotels.hotelsList);
   const dispatch = useDispatch();
  console.log(hotels)
 useEffect(() => {
    dispatch(getHotelsList());
  }, []);
  
  useEffect(() => {
    const { location, checkInDate, checkOutDate, room } = queryString.parse(window.location.search);
     dispatch(getSearchHotel({ location, checkInDate, checkOutDate ,room }))
  }, []);
  return (
    <>
    <Search/>
    <div className="container">
      <div className="row">
        
        <div className="col-12">
          <div className="container-fluid">
            {hotels.map((h) => (
              <HotelCard h={h} key={h._id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    
    </>
  );
}
