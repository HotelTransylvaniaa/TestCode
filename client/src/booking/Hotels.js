import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { allHotels } from "../store/actions/hotels";
import HotelCard from "../components/cards/HotelCard";
import { getHotelsList } from "../store/actions/hotels";
export default function Hotels() {
  let hotels = useSelector((state) => state.hotels.hotelsList);
  const dispatch = useDispatch();
  // const [hotels,setHotels]=useState([])
  // useEffect(()=>{
  //     loadAllHotels();
  // },[])
  //    const loadAllHotels=async()=>{
  //       let res=await allHotels();
  //       console.log(res)
  //       setHotels(res.data)
  //     }
  useEffect(() => {
    dispatch(getHotelsList());
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">{/* <!-- Khloud..... --> */}</div>
        <div className="col-8">
          <div className="container-fluid">
            {hotels.map((h) => (
              <HotelCard h={h} key={h._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
