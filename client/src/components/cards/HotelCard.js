import { Link } from "react-router-dom";

export default function HotelCard({h}){
   return (
       <>
 <div className="card my-3 shadow" style={{maxWidth: "58rem"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={h.images[0]} className="img-fluid h-100 p-1" alt="hotel"/>
    </div>
    <div className="col-md-5 border-end">
      <div className="card-body">
        <h5 className="card-title">{h.name}</h5>
        <div className="d-flex"> 
         {new Array(h.rating).fill(0).map(() => (<i className="fa-solid fa-star text-warning mt-1"></i>))}   
          <i className="bi bi-geo-alt-fill text-primary ms-1 mt-0"></i>
          <p className="text-primary">{h.address.city}</p>
        </div>
        <button className="border-success text-success btn py-0 px-2">Breakfast </button>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-body text-end mt-1">
        <div className="row justify-content-end">
          <div className="col-8 p-0">
            <h6 className="m-0">Excellent</h6>
            <p style={{fontSize: "0.8rem"}} className="text-muted">349 reviews</p>
          </div>
          <div className="col-4">
            <span className="badge bg-primary rounded-pill">8.3</span>
          </div>
        </div>
        
        <Link to={`/hotel-details/${h._id}`}><button className="btn btn-primary mt-5">Select room</button></Link> 
      </div>
    </div>
  </div>
</div>
       </>
   )
}
