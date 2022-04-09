const User = require("../models/user");
const bcrypt = require("bcrypt");

// let hashedPassword;
// try {
//   hashedPassword = await bcrypt.hash(password, 12);
// } catch (err) {
//   const error = new HttpError("could npt create user ,please true again.", 500);
//   //return
//   next(error);
// }
// const createUser = new User({
//   userName ,
//   userEmail ,
//   password : hashedPassword,
// })

const findOne = (id) => {
  return User.findById(id);
};

const find = () => {
  return User.find();
};

const create = (body) => {
  return User.create(body);
};

const delOne = (id) => {
  console.log(id)
  return User.findByIdAndDelete(id.id);
};

const editOne = (id, body) => {
  return User.findByIdAndUpdate(id.id, body, { new: true });
};

module.exports = {
  create,
  findOne,
  find,
  delOne,
  editOne,
};
