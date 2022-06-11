const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const NewbookSchema=mongoose.Schema({
    name: String,
    author_id:{
        type: ObjectId,
        ref: "NewAuthor"
    },
    price: Number,
    ratings: Number,
    publisher_id: {
        type: ObjectId,
        ref: "NewPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }


},{timestamps: true});


module.exports = mongoose.model('Newbook', NewbookSchema) //newbooks
