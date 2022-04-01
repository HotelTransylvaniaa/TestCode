import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotelDetails, postBookingData } from "../store/actions/hotels";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import { ToastContainer, toast } from 'react-toastify';

export default function HotelDetails() {
  const { auth } = useSelector((state) => ({ ...state }))
  let navigate = useNavigate();
  let hotelDetails = useSelector((state) => state.hotels.hotelDetails);
  console.log(hotelDetails)
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

  let date1 = new Date(checkInDate);
  let date2 = new Date(checkOutDate);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let numberOfNight = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const handelClick = async (h, rId, rPrice) => {
    let paymentPrice = parseInt(rPrice) * parseInt(numberOfNight) * parseInt(numberOfRooms)
    const BookData = { userId: auth.userId, hotelId: h, roomId: rId, BookingStartDate: checkInDate, BookingEndDate: checkOutDate, numberOfRooms: parseInt(numberOfRooms), numberOfNights: numberOfNight, PaymentPrice: paymentPrice }
    try {
      await postBookingData(BookData)
      toast.success("Success Booking");
    }
    catch (err) {
      console.log(err.response.data)
      toast.error(err.response.data)
    }

  };
  return (
    <>
      <div>

        <div className="hotelDetailsImage mb-5">
          <Link to={""} className="text-decoration-none pointer">
            <div className="row gx-0">
              <div className="col-md-6">
                <div className="position-relative">
                  <img src={hotelDetails.images[0]} alt="" className="w-100" />
                  <p className="position-absolute bottom-0 end-0 text-white me-5">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-fill me-2" viewBox="0 0 16 16">
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
                    <img src={hotelDetails.images[1]} alt="" className="w-100" />
                  </div>
                  <div className="w-50">
                    <img src={hotelDetails.images[2]} alt="" className="w-100" />
                  </div>
                  <div className="w-50">
                    <img src={hotelDetails.images[3]} alt="" className="w-100" />
                  </div>
                  <div className="w-50">
                    <img src={hotelDetails.images[4]} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
            {
              hotelDetails.rooms.map((r) => (
                <div className="card border rounded my-3 shadow" key={r.roomId}>
                  <div className="row g-0 text-center">
                    <div className="col-md-6 col-lg-4">
                      <img src={r.images[0]} className="img-fluid h-100 p-1" alt="hotel" />
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
                        {r.roomType === "single" && (<i className="fa-solid fa-user text-primary pe-2"></i>)}
                        {r.roomType === "double" && (<i className="fa-solid fa-user-group text-primary pe-2"></i>)}
                        {r.roomType === "triple" && (<i className="fa-solid fa-people-group text-primary pe-2"></i>)}
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-2 border-end">
                      <div className="card-body mt-1">
                        <h6 className="m-0">Price per night</h6>
                        <p className="text-primary fs-5">
                          {r.pricePerNight} $
                        </p>
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
                    <button className="btn btn-primary mt-5 ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      {auth && auth.token ? "Book" : "Login To book"}
                    </button>
                  </div>

                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <ToastContainer />
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <p className="modal-title fs-1" id="exampleModalLabel">Booking Info</p>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                  <span >Booking End Date :</span>
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
                                  <input type="number" min="1" className="form-control" style={{ height: "30px" }} onChange={(e) => setNumberOfRooms(e.target.value)} required />
                                </div>
                              </div>
                              <div className="row py-2">
                                <div className="col-sm-5">
                                  <span>Booking Price :</span>
                                </div>
                                <div className="col-sm-7">
                                  <span>{parseInt(r.pricePerNight) * parseInt(numberOfNight) * parseInt(numberOfRooms)} $</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" onClick={() => handelClick(hotelDetails._id, r.roomId, r.pricePerNight)}>Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>



    </>
  )
}
