const bookModel = require("../models/bookModel")

const createBook = async function(req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function(req, res) {
    let allbooks = await bookModel.find().select({ bookName: 1, authorName: 1 })
    res.send({ msg: allbooks })
}

const getBooksInYear = async function(req, res) {
    let publishYear = req.body.year
    let allbooks = await bookModel.find({year : publishYear})
    res.send({ msg: allbooks })
}
const getParticularBooks = async function(req, res) {
    let condition= req.body
    let allbooks = await bookModel.find(condition)
    res.send({ msg: allbooks })
}
const getXINRBooks = async function(req, res) {
    let allbooks = await bookModel.find({"price.indianPrice" :{$in:["100INR","200INR","500INR"]}})
    res.send({ msg: allbooks })
}
const getRandomBooks = async function(req, res) {
    let allbooks = await bookModel.find({$or:[{stockAvailable: true},{pages: {$gt:"500"}}]})
    res.send({ msg: allbooks })
}



module.exports.createBook = createBook
module.exports.bookList = bookList 
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks