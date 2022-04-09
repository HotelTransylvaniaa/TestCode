const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const findOne = (id) => {
  return Admin.findById(id);
};

const find = () => {
  return Admin.find();
};

const create = (body) => {
  return Admin.create(body);
};

const delOne = (id) => {
  console.log(id)
  return Admin.findByIdAndDelete(id.id);
};

const editOne = (id, body) => {
  return Admin.findByIdAndUpdate(id.id, body, { new: true });
};


const login= async({email,password})=>{
    const user=await Admin.findOne({email});
    const valid=await bcrypt.compare(password,user.password);  
    console.log(valid)
    if(!valid){throw "UN_AUTH"}
   else{
    return jwt.sign({
        email,adminId:user._id
    },"gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh", { expiresIn: '1d' })
}}

module.exports = {
  create,
  findOne,
  find,
  delOne,
  editOne,
  login
};
