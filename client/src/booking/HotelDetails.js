import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotelDetails } from "../store/actions/hotels";
import HotelCard from "../components/cards/HotelCard";
import { useNavigate } from "react-router-dom";

export default function HotelDetails() {
  let navigate = useNavigate();
  const [isRecevd, setisRecevd] = useState(false);
  let hotelDetails = useSelector((state) => state.hotels.hotelDetails);

  const params = useParams();
  const dispatch = useDispatch();
  let rooms;
  useEffect(() => {
    dispatch(getHotelDetails(params));
  }, []);
  useEffect(() => {
    test();
  }, [hotelDetails]);
  const test = async () => {
    let x = await hotelDetails.rooms[0];
    // rooms=hotelDetails.rooms;
    console.log(x, "room");
  };

  // const handelClick = (e) => {
  //   e.preventDefault();
  //   if (!auth) navigate("/login");
  // };
  return (
    <>
      <div className="container">
        <div className="hotelDetailsImage mb-5">
          <Link to={""} className="text-decoration-none pointer">
            <div className="row gx-0">
              <div className="col-md-6">
                <div className="position-relative">
                  <img
                    src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg"
                    alt=""
                    className="w-100"
                  />
                  <p className="position-absolute bottom-0 end-0 text-white me-5">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-camera-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                      </svg>
                    </span>
                    See all photos
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap">
                  <div className="w-50">
                    <img
                      src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="w-50">
                    <img
                      src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="w-50">
                    <img
                      src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="w-50">
                    <img
                      src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <h1>Hotel Details</h1>
        <HotelCard h={hotelDetails}/>
        <button className="btn btn-primary mt-5" onClick={handelClick}>
            {auth && auth.token ? "Book Now" :"Login To book"}
            </button> */}
      {/* <div className="container">
        <div className="row">nmk</div>
      </div> */}
      {/* Khloud */}
      {/* <div className="container">
        <div className="card my-3 shadow" style={{ maxWidth: "65rem" }}>
          <div className="row g-0">
            <div className="col-md-4">
              {/* <img src={} className="img-fluid h-100 p-1" alt="hotel" /> */}
      {/* </div> */}
      {/* <div className="col-md-3 border-end">
              <div className="card-body">
                <h4>Benefits</h4>
                <div className="shadow bg-light"></div>
                <h6>Your price includes:</h6>
                {hotelDetails.rooms[0].roomOffers.breakfastIncluded && (
                  <>
                    <i class="fa-solid fa-check text-danger pe-2"></i>
                    <span>Breakfast Included</span>
                    <br></br>
                  </>
                )}
                {hotelDetails.rooms[0].roomOffers.earlyCheckin && (
                  <>
                    <i class="fa-solid fa-check text-danger pe-2"></i>
                    <span>Early Checkin</span>
                    <br></br>
                  </>
                )}
                {hotelDetails.rooms[0].roomOffers.dinnerIncluded && (
                  <>
                    <i class="fa-solid fa-check text-danger pe-2"></i>
                    <span>Dinner Included</span>
                    <br></br>
                  </>
                )}
              </div>
            </div> */}
      {/* <div className="col-md-1 border-end">
              <div className="card-body text-end mt-1">
                <h6 className="m-0">sleeps</h6>
                <i class="fa-solid fa-people-group"></i>
              </div>
            </div> */}
      {/* <div className="col-md-2 border-end">
              <div className="card-body text-end mt-1">
                <h6 className="m-0">Price per night</h6>
                <p className="text-danger fs-5">
                  ${hotelDetails.rooms[0].pricePerNight}
                </p>
              </div>
            </div> */}
      {/* <div className="col-md-2 border-end">
              <div className="card-body  mt-1">
                <h6 className="m-0">room</h6>
                <p className="text-danger  border border-3  w-50 h-50 text-center mt-2">
                  1
                </p>
              </div>
            </div>
          </div> */}
      {/* <div className="card-body">
            {hotelDetails.rooms[0].facilities.internetAccess && (
              <>
                <i class="fa-solid fa-wifi p-2 text-danger"></i>{" "}
                <span>Free Wi-Fi</span>
                <br></br>
              </>
            )}
            {hotelDetails.rooms[0].facilities.internetAccess && (
              <>
                {" "}
                <i class="fa-solid fa-shower p-2 text-danger"></i>
                <span>Shower and bathtub</span>
                <br></br>
              </>
            )}
            <i class="fa-regular fa-window-frame text-danger"></i>
            <span>Non-smoking</span>
          </div> */}
      {/* </div>
      </div> */}

      {/* <div className="container border border-2 p-2 mt-3 shadow">
        <div className="row">
          <h1>Facilities</h1>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all rooms</span>
          </div>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all rooms</span>
          </div>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all rooms</span>
          </div>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all rooms</span>
          </div>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all rooms</span>
          </div>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all rooms</span>
          </div>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all roomsi</span>
          </div>
          <div className="col-md-3">
            <i class="fa-solid fa-check text-danger"></i>{" "}
            <span>Free Wi-Fi in all rooms</span>
          </div>
        </div>
      </div> */}
    </>
  );
}
