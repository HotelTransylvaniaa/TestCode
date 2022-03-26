import { axiosInstance } from "../../network/axios"

// export const allHotels=()=>axiosInstance.get("/hotels")
export const getHotelsList = () => (dispatch) => {
  axiosInstance
    .get("/hotels")
    .then((res) =>
      dispatch({
        type: "GET_HOTELS_LIST",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getHotelsCity = (city) => (dispatch) => {
 console.log(city,"in action");
  axiosInstance
  .get(`/hotels/city/${city}`)
  .then((res) =>
    dispatch({
      type: "GET_HOTELS_CITY",
      payload: res.data,
    })
  )
  .catch((err) => console.log(err,"from"));
}

// export const userHotelBookings = async (token)=>
// await axios.get(`${process.env.REACT_APP_API}/user-hotel-bookings`,{
//   headers:{
//     Authorization: `Bearer ${token}`,
//   },
// });
//  export const isAlreadyBooked = async (token, hotelId)=>
//  await axios.get(`${process.env.REACT_APP_API}/is-already-booked/${hotelId}`,{
//    headers: {
//      Authorization : `Bearer ${token}`,
//    },
//  });

export const getHotelDetails = (params) => (dispatch) => {
  console.log(params.id);
  axiosInstance
    .get(`/hotels/${params.id}`)
    .then((res) =>
      dispatch({
        type: "GET_HOTEL_DETAILS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
export const searchListings = async(query) => await axiosInstance.post(`/hotels/search-listings`, query)