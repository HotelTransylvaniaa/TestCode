import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import HotelCard from "../components/cards/HotelCard";
import Filter from "../components/Filter";
import queryString from "query-string";
import { getHotelsCity } from "../store/actions/hotels";
import { useLocation } from "react-router-dom";
import { getSearchHotel } from "../store/actions/hotels";
import Search from "../components/Forms/search";
export default function TopDestinationPage() {
  let hotels = useSelector((state) => state.hotels.hotelsList);
  const params = useParams();
  console.log(params.city)
  const dispatch = useDispatch();
  const  {search}  = useLocation();
  useEffect(() => {
    const { location, date, room } = queryString.parse(window.location.search);
     dispatch(getSearchHotel({ location, date, room }))
    }, []);
  useEffect(() => {
    dispatch(getHotelsCity(params.city));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <Search/>
        
        <div className="col-12">
          <div className="container-fluid">
            {hotels.map((h) => (
              <HotelCard h={h} key={h._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}