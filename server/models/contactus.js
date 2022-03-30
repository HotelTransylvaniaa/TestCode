const mongoose =require("mongoose");
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true
    },

    
},{timestamps:true})


const ContactModel=mongoose.model("CONTACTUS",contactSchema);
module.exports=ContactModel;