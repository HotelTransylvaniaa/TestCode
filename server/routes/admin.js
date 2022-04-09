
const express=require("express");
const controlUser=require("../controllers/users");
const controlBooking = require("../controllers/booking");
const adminControler=require("../controllers/admin");
const controlHotels=require("../controllers/hotels");
const router=express.Router();
const {auth} =require("../middelware/index")

//admin
router.get("/admin",auth,(req,res,next)=>{
    console.log("in admin")
    adminControler.find().then((user)=>{
        res.json(user);
    }).catch((err)=>{
        console.log(err.message)
        res.status(422).send(err.message);
    })
})

router.post("/admin/login",(req,res,next)=>{
    console.log("in admin")
    adminControler.login(req.body).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message);
    })
})
//users
router.get("/admin/users",auth,(req,res,next)=>{
controlUser.find({}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err)
        res.status(404).end()
    })
})
router.get("/admin/users/:id",auth,(req,res,next)=>{
    const {id}=req.params;
    controlBooking.findUserBooking(id)
    .then((user)=>{
        res.json(user);
    })
    .catch(()=>{
        res.status(404).json({"err":"in valid id"})
    })
})
router.delete("/admin/users/:id",auth,(req,res,next)=>{
    const id=req.params
    controlUser.delOne(id).then(()=>{
      res.status(200).end()
    }).catch((err)=>{
        res.status(422).end()
    })
})
router.post("/admin/users",auth,(req,res,next)=>{
    console.log(req.body);
    controlUser.create(req.body).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message)
    })
})
router.patch("/admin/users/:id",auth,(req,res,next)=>{
    const id=req.params;
    controlUser.editOne(id,req.body).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message);
    })
})

//booking
router.get("/admin/booking/:id", auth,(req, res, next) => {
    const id=req.params
    console.log(id)
    controlBooking. findByid(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
})
router.get("/admin/booking",auth, (req, res, next) => {
    const data = controlBooking.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
})
router.delete("/admin/booking/:id", auth,(req, res, next) => {
    const id = req.params
    controlBooking.delOne(id).then(() => {
        res.status(200).end()
    }).catch((err) => {
        res.status(422).end()
    })
})

//hotels
router.get("/admin/hotels", auth,(req, res, next) => {
    controlHotels.find({}).then((hotels) => {
        res.json(hotels);
    }).catch((err) => {
        res.status(404).end()
    })
})
router.get("/admin/hotels/:id",auth, (req, res, next) => {
    const { id } = req.params;
    controlHotels.findOne(id)
        .then((hotel) => {
            res.json(hotel);
        })
        .catch(() => {
            res.status(404).json({ "err": "in valid id" })
        })
})
router.delete("/admin/hotels/:id",auth, (req, res, next) => {
    const id = req.params
    controlHotels.delOne(id).then(() => {
        res.status(200).end()
    }).catch((err) => {
        res.status(422).end()
    })
})
router.patch("/admin/hotels/:id", auth,(req, res, next) => {
    const id = req.params;
    controlHotels.editOne(id, req.body).then((hotel) => {
        res.json(hotel);
    }).catch((err) => {
        res.status(422).send(err.message);
    })
})

module.exports=router;