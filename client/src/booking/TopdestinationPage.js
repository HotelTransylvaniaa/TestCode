// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import HotelCard from "../components/cards/HotelCard";
// import { getHotelsList } from "../store/actions/hotels";
// import Filter from "../components/Filter";
// export default function Hotels() {
//   let hotels = useSelector((state) => state.hotels.hotelsList);
//   const dispatch = useDispatch();
//    useEffect(() => {
//     dispatch(getHotelsList());
//   }, []);
//   return (
//     <div className="container">
//       <div className="row">
//         {/* <div className="col-4 shadow mt-3">
//           <Filter/>
//           </div> */}
//         <div className="col-8">
//           <div className="container-fluid">
//             {hotels.map((h) => (
//               <HotelCard h={h} key={h.id} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }