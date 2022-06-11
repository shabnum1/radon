const express = require('express');
const router = express.Router();
//const NewauthorModel = require("../models/NewauthorModel.js")
//const NewbookModel = require("../models/NewbookModel.js")
const bookController = require("../controllers/bookController")
const authorController = require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")
router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
});

router.post("/createAuthor", authorController.createAuthor)

router.post("/createBook", bookController.createBook)

router.post("/createpublisher",publisherController.createPublisher)

router.get("/getBooksWith_A_P_Details", bookController.getBooksWith_A_P_Details) 
                                                      
router.get("/getBooksWithAuthorDetails",bookController.getBooksWithAuthorDetails) 

router.get("/getAuthorsData", authorController.getAuthorsData) 

router.get("/getBooksData", bookController.getBooksData) 

router.put("/updateIsHardCover",bookController.updateIsHardCover)

router.put("/authorRating",bookController.authorRating) 

router.get("/bookBetween", bookController.bookBetween)

module.exports = router;
