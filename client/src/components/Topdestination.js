import { Link } from "react-router-dom";
import "./Topdestination.css"
import { useEffect,useState } from "react";
import { useDispatch} from "react-redux";
import { getHotelsCity } from "../store/actions/hotels";
export default function TopDestination() {
  const destinations = [
    {
      image:
        "//pix6.agoda.net/geo/city/7923/1_7923_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Cairo",
      description: "887 accommodations",
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/18749/1_18749_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Giza",
      description: "757 accommodations",
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/6700/1_6700_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Hurghada",
      description: "1,439 accommodations",
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/2199/1_2199_02.jpg?s=345x345&ar=1x1",
      city: "Alexandria",
      description: "592 accommodations",
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/15897/1_15897_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Sharm El sheikh",
      description: "573 accommodations",
    },
    {
      image:
        "https://pix6.agoda.net/geo/city/10643/1_10643_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      city: "Luxor",
      description: "343 accommodations",
    },
  ];
  const [city,setCity]=useState("");
  const dispatch = useDispatch();
  const getCity=(city)=>{
    console.log(city)
    setCity(city);
  }
  useEffect(() => {
    dispatch(getHotelsCity(city));
  }, [city]);
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center my-5">Top destinations in Egypt</h3>
        {destinations.map((destination) => (
          <div className="col-6 col-md-2">
            <div>
            <Link to={`/hotels/city/${destination.city}`}> <img src={destination.image} className="rounded-circle mx-auto d-block w-75"alt="destination" onClick={()=>getCity(destination.city)}/></Link>
              <h5 className="text-center my-2">{destination.city}</h5>
              <p className="text-muted text-center my-2">
                {destination.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
