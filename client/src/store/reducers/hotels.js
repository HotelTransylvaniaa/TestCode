const INITIAL_STATE = {
    hotelsList: [],
    hotelDetails: {},
  };
  
  export default function hotels(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_HOTELS_LIST":
        return {
          ...state,
          hotelsList: action.payload,
        };
      case "GET_HOTEL_DETAILS":
        return {
          ...state,
          hotelDetails: action.payload,
        };
        case "GET_HOTELS_SEARCH":
        return {
          ...state,
          hotelsList: action.payload,
        };
        case "GET_HOTELS_CITY":
          return {
            ...state,
            hotelsList: action.payload,
          };
      default:
        return state;
    }
  }