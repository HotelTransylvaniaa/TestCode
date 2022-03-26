import React, { useState } from "react";
// import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AlgoliaPlaces from "algolia-places-react";
import moment from "moment";
import DatePicker, {
  DateObject,
  getAllDatesInRange,
} from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

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
      <div className="bg-primary">
        <div className="container p-1 my-3">
          <div className="row gx-2">
            <div className="col-4">
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
              className="btn btn-primary p-2 pe-3 ps-3 mt-1 btn-square"
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
