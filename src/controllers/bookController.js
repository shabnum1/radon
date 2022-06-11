const NewauthorModel = require("../models/NewauthorModel")
const NewpublisherModel = require("../models/NewpublisherModel")
const NewbookModel= require("../models/NewbookModel")
var mongodb = require ("mongodb")


const createBook= async function (req, res) {
    
    let book = req.body // prblm3 (3a ,3b,3c,3d)  get the data from request body

    let authorId=await NewauthorModel.find().select({_id:1}) //get the list of objects contaning author obj_id
   let authorIdArr=authorId.map((obj)=>{return obj._id.toString()}) //get the string from object_id

    
    let publisheId=await NewpublisherModel.find().select({_id:1}) //get the list of objects contaning publisher obj_id
     let publishIdArr=publisheId.map((obj)=>{return obj._id.toString()}) //get the string from object_id
    
    if (book.author_id!=undefined){  //check if u enter the author id or not
        if(book.publisher_id!=undefined){ //check if u enter the publisher id or not
            if (authorIdArr.includes(book.author_id)){ // check wether the author id is in db or not
                if(publishIdArr.includes(book.publisher_id)){ // check wether the publisher id is in db or not
                    let bookCreated = await NewbookModel.create(book)
                    return res.send({data: bookCreated})
                }
                return res.send({data: "Publisher Id is not present in db"})
            } 
            return res.send({data: " Author Id is not present in db"})
        }
         return res.send({data: "Publisher id is required"}) 
    }
    return res.send({data: "Author id is required"})
}
const getBooksData= async function (req, res) {
    let books = await NewbookModel.find()
    res.send({data: books})
}
//....
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await NewbookModel.find().populate(['author_id'])
    res.send({data: specificBook})
}
//prblm 4
 const getBooksWith_A_P_Details = async function (req, res) {
    let specificBook = await NewbookModel.find().populate(['author_id','publisher_id'])
    res.send({data: specificBook})
}
//prblm 5
const updateIsHardCover =async function (req,res){
    let data= await NewpublisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
    idArry=data.map((obj)=>{return obj._id.toString()})
    let up =await NewbookModel.updateMany({publisher_id:{$in:idArry}},{$set:{isHardCover:true}})
    let upBook=await NewbookModel.find()
    res.send({data:up,upBook})
}

const authorRating=async function(req,res){
    let data =await NewauthorModel.find({rating:{$gt:3.5}}).select({_id:1})
    idArry=data.map((obj)=>{return obj._id.toString()})
    let up =await NewbookModel.updateMany({author_id:{$in:idArry}},{$inc:{price:+10}})
    res.send({data:up})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWith_A_P_Details=getBooksWith_A_P_Details
module.exports.updateIsHardCover=updateIsHardCover
module.exports.authorRating=authorRating
