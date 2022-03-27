import { useState, useEffect } from "react";
import queryString from "query-string";
import Search from "../Forms/search";
import { searchListings } from "../../store/actions/hotels";
import HotelCard from "../cards/HotelCard";
import { useDispatch, useSelector } from "react-redux";
import { getSearchHotel } from "../../store/actions/hotels";

const SearchResult = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchInDate, setSearchInDate] = useState("");
  const [searchOutDate, setSearchOutDate] = useState("");
  const [searchRoom, setSearchRoom] = useState("");
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const { location, checkInDate, checkOutDate, room } = queryString.parse(window.location.search);
    console.table(location , checkInDate, checkOutDate, room)
    searchListings({ location, checkInDate, checkOutDate, room }).then((res) => {
      console.log("SEARCH RESULTS ===>", res.data);
      setHotels(res.data);
    });
  }, [window.location.search]);

  // const hotels = useSelector((state) => state.hotels.hotelsList);
  // console.log(hotels)
  // useEffect(() => {
  //   const { location, date, room } = queryString.parse(window.location.search);
  //   searchListings({ location, date, room }).then((res) => {
  //     console.log("SEARCH RESULTS ===>", res.data);
  //     setHotels(res.data);
  //   });
  // }, [window.location.search]);
  // console.log(window.location.search)


  return (
    <div className="container">
      <Search />
      <div className="row">
        <div className="col-4 shadow mt-3">{/* <Filter/> */}</div>
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
