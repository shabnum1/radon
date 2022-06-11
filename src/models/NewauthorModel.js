const mongoose = require('mongoose');

const NewauthorSchema = new mongoose.Schema({
    authorName: String,
    age:Number,
    address:String,
    rating: Number
    
}, {timestamps: true});


module.exports = mongoose.model('Newauthor', NewauthorSchema) //mongos



// String, Number
// Boolean, Object/json, array

