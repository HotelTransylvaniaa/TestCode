const INITIAL_STATE = {
  hotelsList: [],
  bookingList: [
    {
      hotelId: {
        name: "",
        hotelType: "",
        rating: 0,
        address: {},
        images: [],
        facilities: {
          services: {},
          relax: {},
          internet: {},
          access: {},
          for_kids: {},
          additional: [],
          languages: {},
        },
        rooms: [
          {
            images: [],
            facilities: {},
            roomOffers: {},
          },
        ],
        contact: {
          phone: [],
        },
      },
    },
  ],
  hotelDetails: {
    address: {},
    images: [],
    facilities: {
      services: {},
      relax: {},
      internet: {},
      access: {},
      for_kids: {},
      additional: [],
      languages: {},
    },
    rooms: [
      {
        images: [],
        facilities: {},
        roomOffers: {},
      },
    ],
    contact: {
      phone: [],
    },
  },
};

export default function hotels(state = INITIAL_STATE, action) {
  console.log(action.type);
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
    case "GET_BOOKING_LIST":
      return {
        ...state,
        bookingList: action.payload,
      };
    default:
      return state;
  }
}
