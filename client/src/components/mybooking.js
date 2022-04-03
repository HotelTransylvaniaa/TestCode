import "./profile.css";
import { useEffect, useState } from "react";
// import NavAccount from "./navbar/NavAccount";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editProfile } from "../store/actions/auth";
import { Link } from "react-router-dom";
import { getUserBooking } from "../store/actions/hotels";

export default function Profile() {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  let boookingList = useSelector((state) => state.hotels.boookingList);
  console.log(boookingList)

  useEffect(() => {
    dispatch(getUserBooking(auth.userId));
  }, []);

  return (
    <div className="bg-light my-5">
      <div className="container">
        <div className="row ">
          <div className="col-4 shadow py-4">
            <ul className="list-group">
              <Link
                className="me-3 list-group-item list-group-item-action  border-light fs-5"
                to={"/profile"}
                exact="true"
              >
                Profile
              </Link>
              <Link
                className="me-3 active list-group-item list-group-item-action  border-light fs-5"
                to={"/booking"}
                exact="true"
              >
                My Booking
              </Link>
            </ul>
          </div>
          <div className="col-8 ps-5 mt-5">
            <h6>{auth.userId}</h6>
            {/* <h6>{auth.userId.name}</h6> */}
            <h4 className="fw-bold">My Booking count</h4>

            <h6 className="fw-bold">My Booking Details</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
