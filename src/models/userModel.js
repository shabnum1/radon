const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
  name: {
    type: String
  },
  balance:{
    type:Number,
    default:100
  },
  address:{
    type:String
  },
  age:{
    type:Number
  },
  gender:{
    type:String
  },
  isFreeAppUser:{
    type:Boolean,
    default:false
  }
}, { timestamps: true });

module.exports = mongoose.model('User1', userSchema) //users



// String, Number
// Boolean, Object/json, array