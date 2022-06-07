const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName:{
    type : String,
    require :true
    },
    price : {
       indianPrice: String,
       europeanPrice: String
    },
    year:{
       type : Number,
       default : 2021
    },
    tags: [String],
    authorName : String,
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //mongos



// String, Number
// Boolean, Object/json, array