const express =require("express");
const stripeController=require("../controllers/stripe")
const requireSignin=require("../middelware/index")
const router =express.Router()

// router.post("/create-connect-account",(req,res,next)=>{
//     console.log("hereee");
//     stripeController.createConnectAccount().then((user)=>{
//     res.json(user);
// }).catch((err)=>{
//     console.log(err.message)
//     res.status(422).send(err.message)
// })
// },requireSignin)




module.exports=router