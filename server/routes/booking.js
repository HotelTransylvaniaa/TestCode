const express = require("express");
const controlBooking = require("../controllers/booking");
const router = express.Router();
const {userAuth} = require('../middelware/index')

//get all hotels in db
router.get("/booking",userAuth, (req, res, next) => {
    const data = controlBooking.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
})

router.get("/booking/:id",userAuth, (req, res, next) => {
    const id=req.params
    console.log(id);
    controlBooking. findForUser(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
})

router.delete("/booking/:id",userAuth, (req, res, next) => {
    const id = req.params
    controlBooking.delOne(id).then(() => {
        res.status(200).end()
    }).catch((err) => {
        res.status(422).end()
    })
})

router.post("/booking",userAuth, (req, res, next) => {
    console.log(req.body);
    controlBooking.create(req.body).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(422).send(err.message)
    })
})
router.patch("/booking/:id",userAuth, (req, res, next) => {
    const id = req.params;
    controlBooking.editOne(id, req.body).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(422).send(err.message);
    })
})


module.exports = router