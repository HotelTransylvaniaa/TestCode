import { Link } from "react-router-dom";
import "./Topdestination.css"
export default function TopDestination() {
  const destinations = [
    {
      image:
        "//pix6.agoda.net/geo/city/7923/1_7923_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Cairo",
      
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/18749/1_18749_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Giza",
      
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/6700/1_6700_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Hurghada",
     
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/2199/1_2199_02.jpg?s=345x345&ar=1x1",
      city: "Alexandria",
      
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/15897/1_15897_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Sharm El Sheikh",
     
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/10643/1_10643_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Luxor",
      
    },
  ];
  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="text-center my-5 content-center text-bolder">Top Destinations in Egypt</h2>
        {destinations.map((destination) => (
          <div className="col-12 col-lg-2 col-md-6" key={destination.city}>
            <div>
            <Link to={`/hotels/city/${destination.city}`}> 
            <img src={destination.image} className="rounded-circle mx-auto d-block w-75 topDestImg"alt="destination"/></Link>
              <h5 className="text-center my-2">{destination.city}</h5>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
