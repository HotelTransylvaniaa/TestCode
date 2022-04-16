import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotelDetails, postBookingData } from "../store/actions/hotels";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import { ToastContainer, toast } from "react-toastify";

export default function HotelDetails() {
  const { auth } = useSelector((state) => ({ ...state }));
  let navigate = useNavigate();
  let hotelDetails = useSelector((state) => state.hotels.hotelDetails);
  console.log(hotelDetails);
  const params = useParams();
  const dispatch = useDispatch();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState();

  useEffect(() => {
    dispatch(getHotelDetails(params));
  }, []);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };
  const goToLogin = () => {
    navigate("/login");
  };
  let date1 = new Date(checkInDate);
  let date2 = new Date(checkOutDate);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let numberOfNight = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const handelClick = async (h, rId, rPrice, rType) => {
    let paymentPrice =
      parseInt(rPrice) * parseInt(numberOfNight) * parseInt(numberOfRooms);
    const BookData = {
      userId: auth.userId,
      hotelId: h,
      roomId: rId,
      roomType: rType,
      BookingStartDate: checkInDate,
      BookingEndDate: checkOutDate,
      numberOfRooms: parseInt(numberOfRooms),
      numberOfNights: numberOfNight,
      PaymentPrice: paymentPrice,
    };
    console.log(auth.token);
    try {
      console.log(auth);
      await postBookingData(BookData, auth.token);
      //close model
      toast.success("Success Booking");
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        navigate("/login");
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        window.localStorage.removeItem("auth");
        console.log(err.response.status);
      }
    }
  };
  return (
    <>
      <div>
        <div className="hotelDetailsImage mb-5">
          <div className="row gx-0">
            <div className="col-lg-6" style={{ height: "600px" }}>
              <div className="position-relative">
                <img
                  src={hotelDetails.images[0]}
                  alt=""
                  className="w-100"
                  style={{ objectFit: "cover", height: "600px" }}
                />
              </div>
            </div>
            <div className="col-lg-6" style={{ height: "600px" }}>
              <div className="d-flex flex-wrap">
                <div className="w-50">
                  <img
                    src={hotelDetails.images[1]}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                </div>
                <div className="w-50">
                  <img
                    src={hotelDetails.images[2]}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                </div>
                <div className="w-50">
                  <img
                    src={hotelDetails.images[3]}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                </div>
                <div className="w-50">
                  <img
                    src={hotelDetails.images[4]}
                    alt=""
                    className="w-100"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container border border-2 p-2 mt-3">
          <div className="row">
            <div className="col-md-12 p-1 ">
              <span className="p-3 fs-3  ">{hotelDetails.name}</span>
              {new Array(hotelDetails.rating).fill(0).map((i, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="orange"
                  className="bi bi-star-fill  me-1 mb-2"
                  viewBox="0 0 16 16"
                  key={index}
                >
                  <path key={index} d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
              <br></br>
              <p className="ps-3 mt-2">
                {hotelDetails.address.street} {hotelDetails.address.city}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white mb-5">
          <div className="container">
            <p className="fs-1">Facilities</p>
            <div className="border border-2 rounded p-3 mt-3 shadow">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  {hotelDetails.facilities.access.front_desk && (
                    <div>
                      <i className="fa-solid fa-bell-concierge p-2 text-primary"></i>
                      <span>Reception</span>
                    </div>
                  )}
                  {hotelDetails.facilities.access.pets_allow && (
                    <div>
                      <i className="fa-solid fa-paw p-2 text-primary"></i>
                      <span>Pets allow</span>
                    </div>
                  )}
                  {hotelDetails.facilities.access.security && (
                    <div>
                      <i className="fa-solid fa-shield-halved p-2 text-primary"></i>
                      <span>Security</span>
                    </div>
                  )}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  {hotelDetails.facilities.for_kids.kids_club && (
                    <div>
                      <i className="fa-solid fa-gamepad p-2 text-primary"></i>
                      <span>Kids Club</span>
                    </div>
                  )}
                  {hotelDetails.facilities.for_kids.playground && (
                    <div>
                      <i className="fa-solid fa-futbol p-2 text-primary"></i>
                      <span>Playground</span>
                    </div>
                  )}
                  {hotelDetails.facilities.for_kids.swimminpool && (
                    <div>
                      <i className="fa-solid fa-person-swimming p-2 text-primary"></i>
                      <span>Swimming Pool</span>
                    </div>
                  )}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  {hotelDetails.facilities.internet.wifi_inrooms && (
                    <div>
                      <i className="fa-solid fa-wifi p-2 text-primary"></i>
                      <span>Wifi in Room</span>
                    </div>
                  )}
                  {hotelDetails.facilities.internet.wifi_public && (
                    <div>
                      <i className="fa-solid fa-wifi p-2 text-primary"></i>
                      <span>Wifi Public</span>
                    </div>
                  )}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  {hotelDetails.facilities.languages.Arabic && (
                    <div>
                      <i className="fa-solid fa-language p-2 text-primary"></i>
                      <span>Arabic</span>
                    </div>
                  )}
                  {hotelDetails.facilities.languages.English && (
                    <div>
                      <i className="fa-solid fa-language p-2 text-primary"></i>
                      <span>English</span>
                    </div>
                  )}
                  {hotelDetails.facilities.languages.French && (
                    <div>
                      <i className="fa-solid fa-language p-2 text-primary"></i>
                      <span>French</span>
                    </div>
                  )}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  {hotelDetails.facilities.relax.nightclub && (
                    <div>
                      <i className="fa-solid fa-wine-glass p-2 text-primary"></i>
                      <span>Night Club</span>
                    </div>
                  )}
                  {hotelDetails.facilities.relax.sauna && (
                    <div>
                      <i className="fa-solid fa-igloo p-2 text-primary"></i>
                      <span>Sauna</span>
                    </div>
                  )}
                  {hotelDetails.facilities.relax.spa && (
                    <div>
                      <i className="fa-solid fa-spa p-2 text-primary"></i>
                      <span>Spa</span>
                    </div>
                  )}
                  {hotelDetails.facilities.relax.tours && (
                    <div>
                      <i className="fa-solid fa-tents p-2 text-primary"></i>
                      <span>Tours</span>
                    </div>
                  )}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  {hotelDetails.facilities.services.Cash_withdrawal && (
                    <div>
                      <i className="fa-solid fa-sack-dollar p-2 text-primary"></i>
                      <span>Cash Withdrawal</span>
                    </div>
                  )}
                  {hotelDetails.facilities.services.Daily_housekeeping && (
                    <div>
                      <i className="fa-solid fa-shield-halved p-2 text-primary"></i>
                      <span>Daily House keeping</span>
                    </div>
                  )}
                  {hotelDetails.facilities.services.Dry_cleaning && (
                    <div>
                      <i className="fa-solid fa-shirt p-2 text-primary"></i>
                      <span>Dry Cleaning</span>
                    </div>
                  )}
                  {hotelDetails.facilities.services.Salon && (
                    <div>
                      <i className="fa-solid fa-couch p-2 text-primary"></i>
                      <span>Salon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container">
            <p className="fs-1">Rooms Type</p>
            {hotelDetails.rooms.map((r, index) => (
              <div className="card border rounded my-3 shadow" key={index}>
                <div className="row g-0 text-center">
                  <div className="col-md-6 col-lg-4">
                    <img
                      src={r.images[0]}
                      className="img-fluid w-100 h-75 p-1"
                      alt="hotel"
                    />
                  </div>
                  <div className="col-md-6 col-lg-3 border-end">
                    <div className="card-body text-start">
                      <h4>Benefits</h4>
                      <div className="shadow bg-light"></div>
                      <h6>Your price includes:</h6>
                      {r.roomOffers.breakfastIncluded && (
                        <>
                          <i className="fa-solid fa-check text-primary pe-2"></i>
                          <span>Breakfast Included</span>
                          <br></br>
                        </>
                      )}
                      {r.roomOffers.earlyCheckin && (
                        <>
                          <i className="fa-solid fa-check text-primary pe-2"></i>
                          <span>Early Checkin</span>
                          <br></br>
                        </>
                      )}
                      {r.roomOffers.dinnerIncluded && (
                        <>
                          <i className="fa-solid fa-check text-primary pe-2"></i>
                          <span>Dinner Included</span>
                          <br></br>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 border-end">
                    <div className="card-body mt-1">
                      <h6 className="m-0">Type</h6>
                      {r.roomType === "single" && (
                        <i className="fa-solid fa-user text-primary pe-2"></i>
                      )}
                      {r.roomType === "double" && (
                        <i className="fa-solid fa-user-group text-primary pe-2"></i>
                      )}
                      {r.roomType === "triple" && (
                        <i className="fa-solid fa-people-group text-primary pe-2"></i>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 border-end">
                    <div className="card-body mt-1">
                      <h6 className="m-0">Price per night</h6>
                      <p className="text-primary fs-5">{r.pricePerNight} $</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-1 border-end">
                    <div className="card-body mt-1">
                      <h6 className="m-0">room</h6>
                      <p className="text-primary w-100 border border-3  w-50 h-50 text-center mt-2">
                        {r.count}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="fs-3 ">Room Facilities</p>
                  <div className="row">
                    {r.facilities.airConditioning && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-fan p-2 text-primary"></i>
                        <span>Air Conditioning</span>
                      </div>
                    )}
                    {r.facilities.balcony && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-mountain-sun p-2 text-primary"></i>
                        <span>Balcony</span>
                      </div>
                    )}
                    {r.facilities.bathtub && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-bath p-2 text-primary"></i>
                        <span>Shower and bathtub</span>
                      </div>
                    )}
                    {r.facilities.coffeeteaMaker && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-mug-hot p-2 text-primary"></i>
                        <span>Coffee &and; Tea maker</span>
                      </div>
                    )}
                    {r.facilities.internetAccess && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-wifi p-2 text-primary"></i>
                        <span>Free Wi-Fi</span>
                      </div>
                    )}
                    {r.facilities.kitchen && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-kitchen-set p-2 text-primary"></i>
                        <span>Kitchen</span>
                      </div>
                    )}
                    {r.facilities.tv && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-tv p-2 text-primary"></i>
                        <span>TV</span>
                      </div>
                    )}
                    {r.facilities.washingMachine && (
                      <div className="col-md-4 col-lg-3">
                        <i className="fa-solid fa-dumpster p-2 text-primary"></i>
                        <span>Washing Machine</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex p-3">
                  {auth && auth.token ? (
                    <button
                      className="btn btn-primary mt-5 ms-auto"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal${index}`}
                    >
                      Book
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary mt-5 ms-auto"
                      onClick={goToLogin}
                    >
                      Login To book
                    </button>
                  )}
                </div>

                <div
                  className="modal fade"
                  id={`exampleModal${index}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <ToastContainer />
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <p className="modal-title fs-1" id="exampleModalLabel">
                          Booking Info
                        </p>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="container">
                          <div className="my-2 border border-1 shadow p-5">
                            <div className="row py-2">
                              <div className="col-sm-5">
                                <span>Hotel :</span>
                              </div>
                              <div className="col-sm-7">
                                <span>{hotelDetails.name}</span>
                              </div>
                            </div>

                            <div className="row py-2">
                              <div className="col-sm-5">
                                <span>Room :</span>
                              </div>
                              <div className="col-sm-7">
                                <span>{r.roomType}</span>
                              </div>
                            </div>

                            <div className="row py-2">
                              <div className="col-sm-5">
                                <span>Booking Price Per night :</span>
                              </div>
                              <div className="col-sm-7">
                                <span>{r.pricePerNight} $</span>
                              </div>
                            </div>

                            <div className="row py-2">
                              <div className="col-sm-5">
                                <span>Booking Start Date :</span>
                              </div>
                              <div className="col-sm-7">
                                <DatePicker
                                  placeholder="checkInDate"
                                  defaultValue={checkInDate}
                                  value={checkInDate}
                                  selected={checkInDate}
                                  minDate={new Date()}
                                  onChange={handleCheckInDate}
                                  style={{ height: "30px" }}
                                />
                              </div>
                            </div>

                            <div className="row py-2">
                              <div className="col-sm-5">
                                <span>Booking End Date :</span>
                              </div>
                              <div className="col-sm-7">
                                <DatePicker
                                  placeholder="checkOutDate"
                                  defaultValue={checkOutDate}
                                  value={checkOutDate}
                                  selected={checkOutDate}
                                  minDate={checkInDate}
                                  onChange={handleCheckOutDate}
                                  style={{ height: "30px" }}
                                />
                              </div>
                            </div>
                            <div className="row py-2">
                              <div className="col-sm-5">
                                <span>Number of Rooms :</span>
                              </div>
                              <div className="col-sm-7">
                                <input
                                  type="number"
                                  min="1"
                                  className="form-control"
                                  style={{ height: "30px" }}
                                  onChange={(e) =>
                                    setNumberOfRooms(e.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                            <div className="row py-2">
                              <div className="col-sm-5">
                                <span>Booking Price :</span>
                              </div>
                              <div className="col-sm-7">
                                {numberOfNight &&
                                  numberOfRooms &&
                                  checkInDate &&
                                  checkOutDate ? (
                                  <span>
                                    {parseInt(r.pricePerNight) *
                                      parseInt(numberOfNight) *
                                      parseInt(numberOfRooms)}{" "}
                                    $
                                  </span>
                                ) : (
                                  <span>0 $</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"

                          onClick={() =>
                            handelClick(
                              hotelDetails._id,
                              r.roomId,
                              r.pricePerNight,
                              r.roomType
                            )
                          }

                          disabled={
                            numberOfNight &&
                              numberOfRooms &&
                              checkInDate &&
                              checkOutDate
                              ? false
                              : true
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
