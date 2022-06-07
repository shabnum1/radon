const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor = async function(req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}
const createBook = async function(req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}
//list out the books written by chetan bhagat
const getBooksbyChetanBhagat = async function(req, res) {
    let data = await authorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
   console.log(data)
    let bookData = await bookModel.find({author_id:data[0].author_id})
    res.send({ msg: bookData })
}
//find the author of "Two states"and update  the book price to 100
const authorOfBook = async function(req, res) {
    let data =await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authorData= await authorModel.find({author_id:data.author_id}).select("author_name")
   let price=data.price
    res.send({ msg: authorData,price})

}
//books which cost between 50 to 100
const bookBetween = async function(req,res){
    let data=await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let authorData= await authorModel.find({author_id:data.author_id}).select("author_name")   

   book.map({author_id:data.author_id})
   res.send({msg:data,})

}


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.authorOfBook = authorOfBook
module.exports.getBooksbyChetanBhagat = getBooksbyChetanBhagat
module.exports.bookBetween = bookBetween