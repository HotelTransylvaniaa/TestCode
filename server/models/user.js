const mongoose =require("mongoose");
const bcrypt=require("bcrypt")
const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    stripe_account_id:"",
    srripe_seller:{},
    srripeSession:{}
    
},{timestamps:true})

userSchema.pre("save",function(next){
   let user=this;
   if(user.isModified("password")){
       return bcrypt.hash(user.password,12,function(err,hash){
           if(err){
               console.log("BCRYPT HASH ERR",err);
               return next(err);
           }
           user.password=hash;
           return next();
       });
   }
   else{
       return next();
   }
})


// userSchema.methods.comparePassword=function(passowrd,next){
//     bcrypt.compare(passowrd,this.passowrd,function(err,match){
//         if(err){
//             console.log("compare password err",err)
//             return next(err,false)
//         }
//         //if no err we get null
//         console.log("Match password".match);
//         return next(err,match) // will return true 
//     })
// }

const UserModel=mongoose.model("User",userSchema);
module.exports=UserModel;