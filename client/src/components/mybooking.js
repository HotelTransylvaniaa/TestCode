import "./profile.css";
import "./mybooking.css";
import { useEffect, useState } from "react";
// import NavAccount from "./navbar/NavAccount";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserBooking } from "../store/actions/hotels";
import { deletBookingData } from "../store/actions/hotels";
import Moment from "moment";
import { ToastContainer, toast } from "react-toastify";

export default function Mybooking() {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  Moment.locale("en");
  let bookingList = useSelector((state) => state.hotels.bookingList);

  const deletBooking = (id, startdate) => {
    console.log(id, startdate);
    let date = new Date(startdate);
    console.log(date, "date");
    var currentDate = new Date();
    console.log(currentDate, "current Date");
    if (date > currentDate) {
      console.log("true can be canceled");
      deletBookingData(id);
      dispatch(getUserBooking(auth?.userId));
    } else {
      console.log("false can't be canceled");
      toast.error("You can't cancel this, Please contact with Hotel");
    }
  };

  useEffect(() => {
    dispatch(getUserBooking(auth?.userId));
  }, []);

  return (
    <div className="bg-white py-5">
      <ToastContainer />
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
            <div className="app-container mb-5 table-responsive p-2">
              <table class="table shadow bg-gray">
                <thead>
                  <tr>
                    <th scope="col-6">Hotel</th>
                    <th scope="col-6">Address</th>
                    {/* <th scope="col-6">Payment Price</th> */}
                    {/* <th scope="col-6">Count of rooms</th> */}
                    <th scope="col-6">Start Date</th>
                    <th scope="col-6">End Date</th>
                    <th scope="col-6">Cancel</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {!bookingList.hotelId ? (
                  <> */}
                  {bookingList.map((book) => (
                    <tr>
                      <td>{book?.hotelId?.name}</td>
                      <td>{book?.hotelId?.address.city}</td>
                      <td>
                        {Moment(book?.BookingStartDate).format(
                          "ddd DD MMM YYYY"
                        )}
                      </td>
                      <td>
                        {Moment(book?.BookingEndDate).format("ddd DD MMM YYYY")}
                      </td>
                      {/* <td><i class="fa-solid fa-trash" onClick={deleteBooking}></i></td> */}
                      <td>
                        <i
                          class="fa-solid fa-rectangle-xmark text-danger d-flex justify-content-center"
                          onClick={() =>
                            deletBooking(book?._id, book?.BookingStartDate)
                          }
                        ></i>
                      </td>
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
