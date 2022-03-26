import { useState, useEffect } from "react";
import queryString from "query-string";
import { link } from "react-router-dom";
import Search from "../Forms/search";
import { searchListings } from "../../store/actions/hotels";
import HotelCard from "../cards/HotelCard";

const SearchResult = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchRoom, setSearchRoom] = useState("");
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const { location, date, room } = queryString.parse(window.location.search);
    // console.table({location , date, room})
    searchListings({ location, date, room }).then((res) => {
      console.log("SEARCH RESULTS ===>", res.data);
      setHotels(res.data);
    });
  }, [window.location.search]);

  return (
    <>
      <div className="col">
        <br />
        <Search />
      </div>
      <div className="container">
        <div className="row">
          {hotels.map((h) => (
            <HotelCard key={h._id} h={h} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
