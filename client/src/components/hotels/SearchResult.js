import { useState, useEffect } from "react";
import queryString from "query-string";
import Search from "../Forms/search";
import HotelCard from "../cards/HotelCard";
import { useDispatch, useSelector } from "react-redux";
import { getSearchHotel } from "../../store/actions/hotels";
import { useLocation } from "react-router-dom";
const SearchResult = () => {
  const  {search}  = useLocation();
  const hotels = useSelector((state) => state.hotels.hotelsList);
  console.log(search)
  const dispatch=useDispatch();
  useEffect(() => {
    const { location, date, room } = queryString.parse(window.location.search);
     dispatch(getSearchHotel({ location, date, room }))
    }, [search]);

  return (
    <div className="container">
    <Search/>
    <div className="row">
      <div className="col-4 shadow mt-3">
        {/* <Filter/> */}
        </div>
      <div className="col-8">
        <div className="container-fluid">
          {hotels.map((h) => (
            <HotelCard h={h} key={h._id} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default SearchResult;
