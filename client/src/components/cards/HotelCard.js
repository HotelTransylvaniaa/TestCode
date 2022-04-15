import { Link } from "react-router-dom";
import "./HotelCard.css";
// import './HotelCard.scss';

export default function HotelCard({ h }) {
  return (
    <>
      <section class="main-content">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
                <div class="hotel-card_images">
                {h.images.map((hotel,i)=>{
                  <div
                    id={`carouselExampleControls${i}`}
                    class="carousel slide h-100"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner h-100">
 
                        <div class="carousel-item h-100 active">
                        <img
                          src={hotel}
                          class="d-block w-100"
                          alt="Hotel Image"
                        />
                      </div>
                      
                      {/* <div class="carousel-item h-100 active">
                        <img
                          src={h.images[0]}
                          class="d-block w-100"
                          alt="Hotel Image"
                        />
                      </div>
                      <div class="carousel-item h-100 active">
                        <img
                          src={h.images[1]}
                          class="d-block w-100"
                          alt="Hotel Image"
                        />
                      </div>
                      <div class="carousel-item h-100 active">
                        <img
                          src={h.images[2]}
                          class="d-block w-100"
                          alt="Hotel Image"
                        />
                      </div>
                      <div class="carousel-item h-100 active">
                        <img
                          src={h.images[3]}
                          class="d-block w-100"
                          alt="Hotel Image"
                        />
                      </div> */}
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carouselExampleControls${i}`}
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target={`#carouselExampleControls${i}`}
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                    {/* <a
                      class="carousel-control-prev"
                      href="#bootstrapCarousel{{i}}"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#bootstrapCarousel{{i}}"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a> */}
                  </div>
                  })}
                </div>
                <div class="hotel-card_info p-4">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <h5 class="mb-0">{h.name}</h5>
                    <div>
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                      <i class="fa fa-star text-warning"></i>
                    </div>
                    {/* <a href="#!" class="text-dark ml-auto">
                      <i class="far fa-heart fa-lg"></i>
                    </a> */}
                  </div>
                  <div class="d-flex justify-content-between align-items-end">
                    <div class="hotel-card_details">
                      <div class="text-muted mb-3 ms-3">
                        <i class="fas fa-map-marker-alt me-3 my-2"></i>
                        {h.address.city}
                      </div>
                      <div className="d-flex mb-4 ms-4">
                        <i class="fa-solid fa-wifi me-3"></i>
                        <i class="fa-solid fa-bed me-3"></i>
                        <i class="fa-solid fa-snowflake me-3"></i>
                        <i class="fa-solid fa-bell-concierge me-3"></i>
                      </div>
                      <ul class="hotel-checklist pl-0 mb-0">
                        <li>
                          <i class="fa fa-check text-success me-2"></i> Swiming
                          pools
                        </li>
                        <li>
                          <i class="fa fa-check text-success me-2 my-2"></i>{" "}
                          Room service
                        </li>
                        <li>
                          <i class="fa fa-check text-success me-2"></i> Parking
                        </li>
                      </ul>
                    </div>
                    <Link to={`/hotel-details/${h._id}`}>
                      <button className="btn btn-primary mt-5">
                        Select room
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="card my-3 shadow" style={{ maxWidth: "58rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={h.images[0]}
              className="img-fluid h-100 p-1"
              alt="hotel"
            />
          </div>
          <div className="col-md-5 border-end">
            <div className="card-body">
              <h5 className="card-title">{h.name}</h5>
              <div className="d-flex">
                {new Array(h.rating).fill(0).map(() => (
                  <i className="fa-solid fa-star text-warning mt-1"></i>
                ))}
                <i className="bi bi-geo-alt-fill text-primary ms-1 mt-0"></i>
                <p className="text-primary">{h.address.city}</p>
              </div>
              <button className="border-success text-success btn py-0 px-2">
                Breakfast{" "}
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body text-end mt-1">
              <div className="row justify-content-end">
                <div className="col-8 p-0">
                  <h6 className="m-0">Excellent</h6>
                  <p style={{ fontSize: "0.8rem" }} className="text-muted">
                    349 reviews
                  </p>
                </div>
                <div className="col-4">
                  <span className="badge bg-primary rounded-pill">8.3</span>
                </div>
              </div>

              <Link to={`/hotel-details/${h._id}`}>
                <button className="btn btn-primary mt-5">Select room</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
