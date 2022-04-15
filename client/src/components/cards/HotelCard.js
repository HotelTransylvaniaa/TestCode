import { Link } from "react-router-dom";
// import "./HotelCard.css";
// import './HotelCard.scss'

export default function HotelCard({ h }) {
  return (
    <>
    
      <div className="card my-3 shadow">
        <div className="row g-0">
          <div className="col-md-4" style={{height:"18rem"}}>
            <img
              src={h.images[0]}
              className="img-fluid p-1"
              alt="hotel"
              style={{height:"100%" ,width:"100%"}}
            />
          </div>
          <div className="col-md-5 border-end">
            <div className="card-body">
              <h5 className="card-title">{h.name}</h5>
              <div className="d-flex mt-3">
                <i className="fas fa-map-marker-alt mt-1 mx-2 text-warning"></i>
                <p className="text-primary">{h.address.city}</p>

                {/* <i className="bi bi-geo-alt-fill text-primary ms-1 mt-0"></i> */}
              </div>
              <p className="ms-2 fw-light">{h.address.street}</p>
            </div>
          </div>
          <div
            className="col-lg-3 d-flex align-items-end flex-lg-column justify-content-sm-between px-3 py-4 pe-3"
            
          >
            <div className="star">
              {new Array(h.rating).fill(0).map((x,index) => (
                <i className="fa-solid fa-star text-warning mt-1" key={index}></i>
              ))}
            </div>
            <div className="mt-auto">
              <Link to={`/hotel-details/${h._id}`}>
                <button className="btn btn-primary">Select room</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
