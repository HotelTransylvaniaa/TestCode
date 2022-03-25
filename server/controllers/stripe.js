const User = require("../models/user");
const bcrypt =require("bcrypt");
const jwt=require("jsonwebtoken")

const createConnectAccount=async(req,res)=>{
    console.log(req.config);
}

module.exports={
   createConnectAccount
}