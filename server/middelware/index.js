const expressJwt =require("express-jwt")

 const requireSignin=expressJwt({
    secret:"gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh",
    algorithms:["HS256"]
})

module.exports=requireSignin