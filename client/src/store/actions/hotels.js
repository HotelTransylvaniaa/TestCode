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