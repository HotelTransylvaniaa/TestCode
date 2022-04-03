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

  let bookingList = useSelector((state) => state.hotels.bookingList);
  console.log(bookingList);
  console.log(bookingList[0].hotelId);

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
            <h4 className="fw-bold">My Booking count</h4>
            <h5>{bookingList.length}</h5>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Hotel</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                  <div className="row">
                    <div className="col-6">
                    {bookingList.map((book) => (
                    <h5>{book.hotelId.name}</h5>
                  ))}
                    </div>
                    <div className="col-6">
                    {bookingList.map((days) => (
                    <h5>{days.BookingStartDate}</h5>
                  ))}
                    </div>

                  </div>
                {/* <tr>
                  <th scope="row"></th>
                  {bookingList.map((book) => (
                    <h5>{book.hotelId.name}</h5>
                  ))}
                </tr>
                <tr>
                  <th scope="row"></th>
                  {bookingList.map((days) => (
                    <h5>{days.BookingStartDate}</h5>
                  ))}
                </tr> */}
              </tbody>
            </table>

            {/* <h6 className="fw-bold">My Booking Details</h6> */}
            {/* {bookingList.map((book) => (
              <h5>{book.hotelId.name}</h5>
            ))}
            {bookingList.map((days) => (
              <h5>{days.BookingStartDate.toString()}</h5>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
