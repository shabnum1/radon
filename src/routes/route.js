const express = require('express');
const router = express.Router();
const authorModel = require("../models/authorModel.js")
const bookModel = require("../models/bookModel.js")
const bookController = require("../controllers/bookController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor)

router.post("/createBook", bookController.createBook)

router.get("/authorOfBook", bookController.authorOfBook)

router.get("/getBooksbyChetanBhagat", bookController.getBooksbyChetanBhagat)

router.get("/bookBetween", bookController.bookBetween)

module.exports = router;