
const express=require("express");
const controlUser=require("../controllers/users");
const controlBooking = require("../controllers/booking");
const router=express.Router();

router.get("/admin/users",(req,res,next)=>{
controlUser.find({}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err)
        res.status(404).end()
    })
})

router.get("/admin/users/:id",(req,res,next)=>{
    const {id}=req.params;
    controlBooking.findUserBooking(id)
    .then((user)=>{
        res.json(user);
    })
    .catch(()=>{
        res.status(404).json({"err":"in valid id"})
    })
})

router.delete("/admin/users/:id",(req,res,next)=>{
    const id=req.params
    controlUser.delOne(id).then(()=>{
      res.status(200).end()
    }).catch((err)=>{
        res.status(422).end()
    })
})

router.post("/admin/users",(req,res,next)=>{
    console.log(req.body);
    controlUser.create(req.body).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message)
    })
})
router.patch("/admin/users/:id",(req,res,next)=>{
    const id=req.params;
    controlUser.editOne(id,req.body).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message);
    })
})


module.exports=router;