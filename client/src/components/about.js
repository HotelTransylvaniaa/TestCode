import "./about.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <div className="portfolio mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="content-center">PORTFOLIO</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="section">
                <div className="sectio-photo">
                  <img
                    src="https://th.bing.com/th/id/R.de910aedd4fd80e76f0a201cacbb9d56?rik=%2bpQTD9kqkLr3Dg&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div className="section-content">
                  <h5>INFINITY POOLS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section">
                <div className="sectio-photo">
                  <img
                    src="https://th.bing.com/th/id/R.74a3068bba7295f7eb97cb85cb8ac587?rik=B7rjuZFuZrgBDQ&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div className="section-content">
                  <h5>LUXURY RESTAURANT</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section">
                <div className="sectio-photo">
                  <img
                    src="https://th.bing.com/th/id/R.5d60272914e8342717cd446e20fb3042?rik=BxtMahQl7SV8SQ&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div className="section-content">
                  <h5>BEACH VIEWS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section">
                <div className="sectio-photo">
                  <img
                    src="https://lifestyle.prod.content.iproperty.com/news/wp-content/uploads/sites/2/2018/03/19095424/The-most-beautiful-hotel-bathrooms-to-inspire-2.jpg"
                    alt=""
                  />
                </div>
                <div className="section-content">
                  <h5>LUXURY BATHROOMS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section">
                <div className="sectio-photo">
                  <img
                    src="https://3.imimg.com/data3/TE/CG/MY-14021897/luxury-hotel-service-500x500.jpg"
                    alt=""
                  />
                </div>
                {/* <div className="sectio-photo">
                  <img
                    src="https://th.bing.com/th/id/R.938299b1fa14e4dcaa90dc4e820527ac?rik=JRQDbhsMmzq66w&riu=http%3a%2f%2fmedia.beam.usnews.com%2f09%2fe7%2febe671264b859abf6448220ad8d2%2f170602-roomservice-stock.jpg&ehk=%2fY0X%2fyCLbwy6%2fxSUVDuylXNaw9%2bvGWeoqOPpMmCJnhI%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div> */}
                <div className="section-content">
                  <h5>ROOM SERVICE</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section">
                <div className="sectio-photo">
                  <img
                    src="https://latteluxurynews.com/wp-content/uploads/2020/05/Deep-cleaning-and-sanitation-of-guest-rooms-1K.jpg"
                    alt=""
                  />
                </div>
                <div className="section-content">
                  <h5>ROOM CLEANING</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-compnent mt-5 text-white">
        <div className="layar py-5">
          <div className="container my-5">
            <div className="row">
              <div className="my-3 text-center">
                <h3>Hotels</h3>
                <div className="w-100 d-flex justify-content-center">
                  <h6 className="w-75 ">
                    Here at lastminute.com, we know hotels, and we aim to bring
                    you the best price on a last minute booking. From modern
                    apartments and traditional guesthouses to well-known brands
                    and boutique accommodations; we’ve got a great choice of
                    places to stay. If you’re looking to save a bit of money on
                    your holiday, check out our selection of cheap rooms, or if
                    you want to celebrate in style, take a look at our 5-star
                    luxury hotels. You could even treat yourself to some
                    pampering on one of our spa breaks.
                  </h6>
                </div>
              </div>
              <div className="mb-3 text-center">
                <h3>Why book our hotels?</h3>
                <div className="w-100 d-flex justify-content-center">
                  <h6 className="w-75 ">
                    By booking your hotel room through us, you’re sure to get a
                    great deal thanks to our Price Match Guarantee, and we have
                    plenty of regular offers to help you save more. If you find
                    your hotel cheaper on any other UK website within 24 hours,
                    we will give you the difference. Conditions apply. With Top
                    Secret Hotels, you can enjoy a night in a great hotel room
                    for a fraction of the regular price, while our promo codes
                    offer fantastic discounts.{" "}
                  </h6>
                </div>
              </div>
              <h3 className="text-center">Travel with confidence</h3>
              <h6 className="text-center mb-5">
                Many properties have updated us about their enhanced health and
                safety measures. So, during your search, you may find details
                like
              </h6>
              <div className="col-lg-3 col-md-6">
                <div className="shadow bHover about-card px-2 text-center py-4 mb-3 h-100 rounded">
                  <i className="fa-solid fa-hand-holding-droplet fs-3 pt-2 linner mb-3"></i>
                  <h4 className="h-25 mb-3 d-flex align-items-center justify-content-center">
                    Official health standards
                  </h4>
                  <p>
                    Properties adhering to corporate/organizational sanitization
                    guidelines.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="shadow bHover about-card px-2 text-center py-4 mb-3 h-100 rounded">
                  <i className="fa-solid fa-hand-sparkles fs-3 pt-2 linner mb-3"></i>
                  <h4 className="h-25 mb-3 d-flex align-items-center justify-content-center">
                    Essentials at the property
                  </h4>
                  <p>
                    Free hand sanitizer for guests and individually wrapped food
                    options.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="shadow bHover about-card px-2 text-center py-4 mb-3 h-100 rounded">
                  <i className="fa-solid fa-handshake-simple-slash fs-3 pt-2 linner mb-3"></i>
                  <h4 className="h-25 mb-3 d-flex align-items-center justify-content-center">
                    Social distancing
                  </h4>
                  <p>
                    Contactless check-in and check-out along with other social
                    distancing measures.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="shadow bHover about-card px-2 text-center py-4 mb-3 h-100 rounded">
                  <i className="fa-solid fa-pump-soap fs-3 pt-2 linner mb-3"></i>
                  <h4 className="h-25 mb-3 d-flex align-items-center justify-content-center">
                    Hygiene and sanitization
                  </h4>
                  <p>
                    The use of disinfectant and whether properties enforce a gap
                    period between stays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
