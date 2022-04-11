
const {promisify}=require("util")
const jwt=require("jsonwebtoken")
const verify=promisify(jwt.verify);
const Admin = require("../models/admin");
const User = require("../models/user");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  const admin = await verify(
    authorization,
    "gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh"
  ).catch((err) => {
    res.status(401).end();
  });
  console.log(admin,"admin");
  if (admin) {
    req.admin = await Admin.findById(admin.adminId);
    console.log(req.admin);
    next();
  }
};

const userAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  const user = await verify(
    authorization,
    "gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh"
  ).catch((err) => {
    res.status(401).end();
  });
  console.log(user);
  if (user) {
    req.user = await User.findById(user.userId);
    console.log(req.user);
    next();
  }
};

module.exports = { auth, userAuth };
