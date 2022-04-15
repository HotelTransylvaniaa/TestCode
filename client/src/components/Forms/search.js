import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import AlgoliaPlaces from "algolia-places-react";
import DatePicker from "react-multi-date-picker";
import "react-dropdown/style.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "../header.css";

const { RangePicker } = DatePicker;
const { option } = Select;

const config = {
  appId: process.env.REACT_APP_ALGOLIA_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  language: "en",
};

const Search = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [room, setRoom] = useState("");

  const rooms = [{ label: "Single" }, { label: "Double" }, { label: "Triple" }];

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      location,
      checkInDate.toString(),
      checkOutDate.toString(),
      room.label
    );
    navigate(
      `/search-result?location=${location}&date-from=${checkInDate.toString()}to${checkOutDate.toString()}&room=${room.label
      }`,
      {
        replace: true,
      }
    );
  }

  return (
    <div className="searchBar p-0 rounded-3">
      <div className="container my-1">
        <div className="row gx-2 py-4 justify-content-center">
          <div className="col-sm-12 col-md-4">
            <input
              type="text"
              id="wizards"
              name="wizards"
              list="wizards-list"
              style={{ height: "50px" }}
              placeholder="location"
              className="form-control"
              defaultValue={location}
              option={config}
              onChange={(e) => setLocation(e.target.value)}
            />

            <datalist id="wizards-list">
              <option>Cairo</option>
              <option>Alexandria</option>
              <option>Asswan</option>
              <option>Sharm El Sheikh</option>
              <option>Hurghada</option>
              <option>Giza</option>
              <option>Assuit</option>
              <option>Luxor</option>
              <option>Minia</option>
              <option>Marsa Matroh</option>
              <option>Dahb</option>
              <option>Gona</option>
              <option>Marsa Allam</option>
              <option>Qena</option>
              <option>Bani Suef</option>
              <option>Port Said</option>
              <option>Suez</option>
              <option>Al-Mansura</option>
              <option>Ismailia</option>
              <option>Sohag</option>
              <option>6th of October</option>
              <option>Gona</option>
              <option>Gona</option>
              <option>Gona</option>



            </datalist>
          </div>
          <div className="col-sm-12 col-md-2">
            <DatePicker
              placeholder="checkInDate"
              defaultValue={checkInDate}
              value={checkInDate}
              selected={checkInDate}
              minDate={new Date()}
              onChange={handleCheckInDate}
              style={{ height: "50px" }}
            />
          </div>
          <div className="col-sm-12 col-md-2">
            <DatePicker
              placeholder="checkOutDate"
              defaultValue={checkOutDate}
              value={checkOutDate}
              selected={checkOutDate}
              minDate={checkInDate}
              onChange={handleCheckOutDate}
              style={{ height: "50px" }}
            />
          </div>
          <div className="col-sm-12 col-md-2">
            <Select onChange={(value) => setRoom(value)} options={rooms} />
          </div>
          <div className="col-sm-12 col-md-1 justify-content-center">
            <SearchOutlined
              onClick={handleSubmit}
              className="btn btn-primary btn-square p-2 mt-1 px-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
