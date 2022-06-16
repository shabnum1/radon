const express =  require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMv= require("../middlewares/commonMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", commonMv.authenticate, commonMv.authorise, userController.getUserData)
router.post("/users/:userId/posts",commonMv.authenticate, commonMv.authorise, userController.postMessage)

router.put("/users/:userId",commonMv.authenticate, commonMv.authorise, userController.updateUser)
router.delete('/users/:userId',commonMv.authenticate, commonMv.authorise, userController.deleteUser)

module.exports = router;