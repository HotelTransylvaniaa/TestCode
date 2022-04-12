
const express = require("express");
const controlHotels = require("../controllers/hotels");
const router = express.Router();
const searchListings = require('../controllers/hotels')

//get all hotels in db
router.get("/hotels", (req, res, next) => {
    controlHotels.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
})

//get hotel by id
router.get("/hotels/:id", (req, res, next) => {
    const { id } = req.params;
    controlHotels.findOne(id)
        .then((hotel) => {
            res.json(hotel);
        })
        .catch(() => {
            res.status(404).json({ "err": "in valid id" })
        })
})


//get all hotels in city
router.get("/hotels/city/:city", (req, res, next) => {
    controlHotels.findByCityAndRating(req.params.city).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).json({ "err": "in valid city" })
    })
})

//hotels for search results
router.post("/hotels/search-listings", (req, res, next) => {
    console.log("in search")
    console.log(req.body)
    controlHotels.searchListings(req.body).then((data) => {
        res.json(data);
        console.log(data)
    }).catch((err) => {
        res.status(404).json({ "err": "in valid search result" })
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
module.exports = router;