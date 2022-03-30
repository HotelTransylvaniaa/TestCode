const User = require("../models/user");
const bcrypt =require("bcrypt");
const jwt=require("jsonwebtoken")
const Contact = require("../models/contactus")

const register=(body)=>{
    return User.create(body)
}

const login= async(body)=>{
    let {userEmail,password}=body
    const user=await User.findOne({userEmail});
    const valid=await bcrypt.compare(password,user.password);  
    const userName=user.userName;
    if(!valid){throw "UN_AUTH"}
    else{
        return {token: jwt.sign({
            userEmail,userId:user.id
        },"gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh", { expiresIn: '8d' }),userEmail,userName}
    }
}
const contactUs = async (body) =>{
   const {name ,email ,msg} = body
    console.log(body)
    return Contact.create(body)
}


module.exports={
    register,
    login,
    contactUs
}