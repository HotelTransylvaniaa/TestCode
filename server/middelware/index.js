const expressJwt =require("express-jwt")

 const requireSignin=expressJwt({
    secret:"gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh",
    algorithms:["HS256"]
})

module.exports=requireSignin



const {promisify}=require("util")
const jwt=require("jsonwebtoken")
const User=require("../models/users")
const verify=promisify(jwt.verify);

const auth=async(req,res,next)=>{
 const {authorization}=req.headers
 const user=await verify(authorization,"ggggygygygygygygygyygydssss").catch((err)=>{res.status(401).end()})
 req.user=await User.findById(user.userId)
 console.log(req.user)
 next()
}


module.exports=auth;