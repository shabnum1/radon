const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
//fetch user details
router.get("/users/:userId",commonMW.mid1, userController.getUserData)

//update user details
router.put("/users/:userId",commonMW.mid1, userController.updateUser)

//delete user details
router.delete("/users/:userId",commonMW.mid1 , userController.deleteUser);

module.exports = router;