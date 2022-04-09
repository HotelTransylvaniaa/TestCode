const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const {userAuth} = require('../middelware/index');


router.post("/register", (req, res, next) => {
  authController
    .register(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(422).send(err.message);
    });
});

router.post("/login", (req, res, next) => {
  console.log("in login");
  authController
    .login(req.body)
    .then((token) => {
      res.json(token);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(422).send("wrong please try again");
    });
});

router.post("/contactus", (req, res, next) => {
  console.log("in contactUs", req.body);
  authController
    .contactUs(req.body)
    .then((msg) => {
      res.json(msg);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(422).send("contactUs wrong please try again");
    });
});

router.patch("/profile",userAuth, (req, res, next) => {
  console.log("profile edit");
  authController
    .profileEdit(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(422).send("didn't edit please try again");
    });
});


module.exports = router;
