const User = require("../models/user");

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
