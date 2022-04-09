
const {promisify}=require("util")
const jwt=require("jsonwebtoken")
const verify=promisify(jwt.verify);
const Admin = require("../models/admin");

const auth=async(req,res,next)=>{
 const {authorization}=req.headers
 const admin=await verify(authorization,"gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh").catch((err)=>{res.status(401).end()})
 console.log(admin)
 if(admin){
    req.admin=await Admin.findById(admin.adminId)
    console.log(req.admin)
    next();
 }
}


module.exports=auth;