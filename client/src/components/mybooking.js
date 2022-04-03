import "./profile.css";
import "./mybooking.css";
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
            <div className="row">
              <div className="col-sm-8 col-lg-4">
                <h4 className="fw-bold">Your Booking count :</h4>
              </div>
              <div className="col">
                <h5>{bookingList.length}</h5>
              </div>
            </div>
            <h5 className="fw-bold my-4">My Booking Details :</h5>
            <div className="app-container">
              <table class="table">
                <thead>
                  <tr>
                    
                    <th scope="col-6">Hotel</th>
                    <th scope="col-6">Start Date</th>
                    <th scope="col-6">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {!bookingList.hotelId ? (
                  <> */}
                  {bookingList.map((book) => (
                    <tr>
                      
                      <td>{book.hotelId.name}</td>
                      <td>{book.BookingStartDate}</td>
                      <td>{book.BookingEndDate}</td>
                    </tr>
                  ))}
                  {/* </>
                ) : null} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
