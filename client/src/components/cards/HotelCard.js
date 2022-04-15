import { Link } from "react-router-dom";
import "./HotelCard.css";
// import './HotelCard.scss'

export default function HotelCard({ h }) {
  return (
    <>
      <section className="main-content">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
                <div className="hotel-card_images">
                  <div
                    id="bootstrapCarousel"
                    className="carousel slide h-100"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner h-100">
                      <div className="carousel-item h-100 active">
                        <img
                          src={h.images[0]}
                          className="d-block w-100"
                          alt="Hotel Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card_info p-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="mb-0">{h.name}</h5>
                    <div>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="hotel-card_details">
                      <div className="text-muted mb-3 ms-3">
                        <i className="fas fa-map-marker-alt me-3 my-2"></i>
                        {h.address.city}
                      </div>
                      <div className="d-flex mb-4 ms-4">
                        <i className="fa-solid fa-wifi me-3"></i>
                        <i className="fa-solid fa-bed me-3"></i>
                        <i className="fa-solid fa-snowflake me-3"></i>
                        <i className="fa-solid fa-bell-concierge me-3"></i>
                      </div>
                      <ul className="hotel-checklist pl-0 mb-0">
                        <li>
                          <i className="fa fa-check text-success me-2"></i>{" "}
                          Swiming pools
                        </li>
                        <li>
                          <i className="fa fa-check text-success me-2 my-2"></i>{" "}
                          Room service
                        </li>
                        <li>
                          <i className="fa fa-check text-success me-2"></i>{" "}
                          Parking
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
    </>
  );
}
