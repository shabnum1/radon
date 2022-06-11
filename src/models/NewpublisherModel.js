const mongoose = require('mongoose');

const NewpublisherSchema = new mongoose.Schema({
       name:String,
       headQuarter:String
},
    {timestamps: true}
);


module.exports = mongoose.model('Newpublisher', NewpublisherSchema) //newpublishers

