import { useState, useEffect } from "react";
import queryString from "query-string";
import Search from "../Forms/search";
import { searchListings } from "../../store/actions/hotels";
import HotelCard from "../cards/HotelCard";
import { useDispatch, useSelector } from "react-redux";
import { getSearchHotel } from "../../store/actions/hotels";
const SearchResult = () => {
  // const [hotels, setHotels] = useState([]);
  const hotels = useSelector((state) => state.hotels.hotelsList);
  console.log(hotels)
  const dispatch=useDispatch();
  // useEffect(() => {
  //   const { location, date, room } = queryString.parse(window.location.search);
  //   searchListings({ location, date, room }).then((res) => {
  //     console.log("SEARCH RESULTS ===>", res.data);
  //     setHotels(res.data);
  //   });
  // }, [window.location.search]);
  console.log(window.location.search)

  useEffect(() => {
    const { location, date, room } = queryString.parse(window.location.search);
     dispatch(getSearchHotel({ location, date, room }))
    }, [window.location.search]);

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
