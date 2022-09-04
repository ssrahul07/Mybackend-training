const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const WeatherController = require("../controllers/weatherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//======================cowinApi===============

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByDistrict", CowinController.getByDistrict)
router.post("/cowin/getOtp", CowinController.getOtp)
//=========================sortCitiesApi===========
router.get("/weather/getsortedOfCities", WeatherController.getsortedOfCities)
router.post("/weather/createMeme",WeatherController.createMeme)
//==========================memecrationApi=========================

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;