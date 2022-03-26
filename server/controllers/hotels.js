const Hotels = require("../models/hotels");
//find 
const findOne = (id) => {
  return Hotels.findById(id);
};

const find = () => {
  return Hotels.find();
};

// for top destination
const findByCityAndRating = (city) => {
  console.log(city)
  return Hotels.findOne({"address.city":city,rating:5});
};


// get all hotels in city
const findByCity = (city) => {
  console.log(city)
  return Hotels.findOne({"address.city":city});
};

const create = (body) => {
  const { name,hotelType,rating, address,images,facilities,rooms,contact,postalCode} = body;
  const hotel = {name,hotelType,rating, address,images,facilities,rooms,contact,postalCode};
  return Hotels.create(hotel);
};

const delOne = (id) => {
  //   User.find(title).remove().exec()
  return Hotels.findOneAndRemove(id.id);
};

const editOne = (id, body) => {
  return Hotels.findByIdAndUpdate(id.id, body, { new: true });
};

const searchListings = async (req, res) => {
  const {location, date ,room} = req.body
  // console.log(location, date ,room)
  // console.log(date);
  const fromDate = date.split(',');
  // console.log(fromDate[0]);
  let result = await Hotels.find({from: {$gte: new Date(FormData[0])}, location }).select('-image.data').exec();
  res.json(result);
}

module.exports = {
  create,
  findOne,
  findByCity,
  findByCityAndRating,
  find,
  delOne,
  editOne,
};
