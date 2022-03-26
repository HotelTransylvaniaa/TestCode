import axios from "axios";
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
}

export const getHotelsCity = (city) => (dispatch) => {
  axiosInstance
  .get(`/hotels/${city}`)
  .then((res) =>
    dispatch({
      type: "GET_HOTELS_CITY",
      payload: res.data,
    })
  )
  .catch((err) => console.log(err));
}

export const userHotelBookings = async (token)=>
await axios.get(`${process.env.REACT_APP_API}/user-hotel-bookings`,{
  headers:{
    Authorization: `Bearer ${token}`,
  },
});
 export const isAlreadyBooked = async (token, hotelId)=>
 await axios.get(`${process.env.REACT_APP_API}/is-already-booked/${hotelId}`,{
   headers: {
     Authorization : `Bearer ${token}`,
   },
 });

 export const searchListings = async(query) => await axios.post(`${process.env.REACT_APP_API}/search-listings`, query)