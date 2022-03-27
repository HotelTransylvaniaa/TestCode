import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelCard from "../components/cards/HotelCard";
import queryString from "query-string";
import { getSearchHotel } from "../store/actions/hotels";
import { getHotelsList } from "../store/actions/hotels";
import Filter from "../components/Filter";
import Search from "../components/Forms/search";

export default function Hotels() {
  let hotels = useSelector((state) => state.hotels.hotelsList);
   const dispatch = useDispatch();
  console.log(hotels)
 useEffect(() => {
    dispatch(getHotelsList());
  }, []);
  useEffect(() => {
  const { location, date, room } = queryString.parse(window.location.search);
   dispatch(getSearchHotel({ location, date, room }))
  }, [window.location.search]);
  return (
    <>
    <Search/>
    <div className="container">
      <div className="row">
        <div className="col-4 shadow mt-3">
          {/* <Filter/> */}
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
    </>
  );
}
