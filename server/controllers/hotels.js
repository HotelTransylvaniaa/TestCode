const Hotels = require("../models/hotels");
//find 
const findOne = (id) => {
  console.log(id)
  return Hotels.findById(id);
};

const find = () => {
  return Hotels.find();
};

// for top destination
const findByCityAndRating = (city) => {
  return Hotels.find({ "address.city": city, rating: 5 });
};

// get all hotels in city
const findByCity = (city) => {
  console.log(city)
  return Hotels.find({ "address.city": city });
};

const create = (body) => {
  const { name, rating, address, images, facilities, rooms, contact, postalCode } = body;
  const hotel = { name, rating, address, images, facilities, rooms, contact, postalCode };
  return Hotels.create(hotel);
};

const delOne = (id) => {
  //   User.find(title).remove().exec()
  return Hotels.findByIdAndDelete(id.id);
};

const editOne = (id, body) => {
  return Hotels.findByIdAndUpdate(id.id, body, { new: true });
};


const searchListings = (body) => {
  const { location, date, room } = body
  console.log(location, date, room)
  console.log(location);
  const city = location.split(",");
  console.log(city[0])
  const roomType = room.toLowerCase();
  console.log(roomType)
  return Hotels.find({ "address.city": city[0], "rooms.roomType": roomType });
};


//const searchListings = async (req, res) => {
//   const {location, date ,room} = req.body
//    console.log(location, date ,room)
//   console.log(location);
//   const city=location.split(",");
//   console.log(city[0])
//   const roomType=room.toLowerCase();
//   console.log(roomType)

//   //const fromDate = date.split(',');
//   // console.log(fromDate[0]);
//  // let result = await Hotels.find({from: {$gte: new Date(FormData[0])}, location }).select('-image.data').exec();
//   let result = await Hotels.find({"address.city" :city[0] ,"rooms.roomType":roomType}).exec();
//   console.log(result);
//   res.json(result);
// }
module.exports = {
  create,
  findOne,
  findByCity,
  findByCityAndRating,
  find,
  delOne,
  editOne,
  searchListings
};
