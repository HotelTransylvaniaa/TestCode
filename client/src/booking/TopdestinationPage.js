import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import HotelCard from "../components/cards/HotelCard";
import Filter from "../components/Filter";
import { getHotelsCity } from "../store/actions/hotels";
export default function TopDestinationPage() {
  let hotels = useSelector((state) => state.hotels.hotelsList);
  const params = useParams();
  console.log(params.city)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelsCity(params.city));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 shadow mt-3">
          <Filter/>
          </div>
        <div className="col-8">
          <div className="container-fluid">
            {hotels.map((h) => (
              <HotelCard h={h} key={h.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}