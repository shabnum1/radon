const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const memesController = require("../controllers/memesController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistrictById", CowinController.getDistrictById)

router.get("/getWeatherOfLondon", WeatherController.getWeatherOfLondon)
router.get("/getTempOfCity",WeatherController.getTempOfCity)
router.get("/getTemp",WeatherController.getTemperature);


router.get("/allMemes",memesController.allMemes );
router.post("/memes",memesController.memes)


module.exports = router;