
const express=require("express");
const controlHotels=require("../controllers/hotels");
const router=express.Router();

//get all hotels in db
router.get("/hotels",(req,res,next)=>{
    const data =controlHotels.find({}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.status(404).end()
    })
})

//get hotel by id
router.get("/hotels/:id",(req,res,next)=>{
    const {id}=req.params;
    controlHotels.findOne(id)
    .then((user)=>{
        res.json(user);
    })
    .catch(()=>{
        res.status(404).json({"err":"in valid id"})
    })
})

//get all hotels in city
router.get("/hotels/city/:city",(req,res,next)=>{
      console.log("hereeee")
    const data =controlHotels.findByCity(req.params.city).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.status(404).json({"err":"in valid city"})
    })
})


router.delete("/hotels/:id",(req,res,next)=>{
    const id=req.params
    controlHotels.delOne(id).then(()=>{
      res.status(200).end()
    }).catch((err)=>{
        res.status(422).end()
    })
})

router.post("/hotels",(req,res,next)=>{
    console.log(req.body);
    controlHotels.create(req.body).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message)
    })
})
router.patch("/hotels/:id",(req,res,next)=>{
    const id=req.params;
    controlHotels.editOne(id,req.body).then((user)=>{
        res.json(user);
    }).catch((err)=>{
        res.status(422).send(err.message);
    })
})


module.exports=router;