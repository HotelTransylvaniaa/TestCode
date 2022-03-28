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
      `/search-result?location=${location}&date-from=${checkInDate.toString()}to${checkOutDate.toString()}&room=${
        room.label
      }`,
      {
        replace: true,
      }
    );
  }

  return (
    <>
      <div className="searchBar p-0">
        <div className="container-fluid p-1 my-1">
        <div className="row gx-2 justify-content-center">
            <div className="col-4 ms-1">
              <label className="m-1">City</label>
             
            </div>
            <div className="col-2">
            <label className="m-1">Check-in date</label>
              
            </div>
            <div className="col-2">
            <label className="m-1">Check-out date</label>
              
            </div>
            <div className="col-2">
            <label className="m-1">Type</label>
          
            </div>
            <div className="col-1">
          
            </div>
          </div>
          <div className="row gx-2 justify-content-center pb-4">
            <div className="col-4 ms-1">
          
             <AlgoliaPlaces
                placeholder="location"
                defaultValue={location}
                option={config}
                onChange={({ suggestion }) => setLocation(suggestion.value)}
                style={{ height: "50px" }}
              />
            </div>
            <div className="col-2">
      
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
            <div className="col-2">
        
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
            <div className="col-2">
     
              <Select onChange={(value) => setRoom(value)} options={rooms} />
            </div>
            <div className="col-1">
              <SearchOutlined
                onClick={handleSubmit}
                className="btn btn-primary btn-square h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
