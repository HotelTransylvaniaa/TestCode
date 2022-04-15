import { useState, useEffect } from "react";
import queryString from "query-string";
import Search from "../components/Forms/search";
import HotelCard from "../components/cards/HotelCard";
import { useDispatch, useSelector } from "react-redux";
import { getSearchHotel } from "../store/actions/hotels";
import Footer from "../components/footer/footer";

import { useLocation } from "react-router-dom";
const SearchResult = () => {
  const { search } = useLocation();
  const hotels = useSelector((state) => state.hotels.hotelsList);
  console.log(hotels.length);
  const dispatch = useDispatch();
  useEffect(() => {
    const { location, date, room } = queryString.parse(window.location.search);
    dispatch(getSearchHotel({ location, date, room }));
  }, [search]);

  return (
    <>
      <div className="container">
        <Search />
        <div className="row justify-content-center">
          {hotels.length === 0 ? (
            <>
              <i
                className="fa-solid fa-magnifying-glass text-center text-muted pt-5"
                style={{ fontSize: "150px" }}
              ></i>
              {/* <img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/magnifying-glass-2935435_960_720.png" className="w-25 align-center" alt=""/> */}
              <h1 className="text-center p-5">We Couldn't Find any Thing :(</h1>
            </>
          ) : (
            <>
              {/* <div className="col-4 shadow mt-3"><Filter/></div> */}
              <div className="col-12">
                <div className="container-fluid w-100">
                  {hotels.map((h) => (
                    <HotelCard h={h} key={h._id} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
