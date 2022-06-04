const express = require('express');
const underscore = require('underscore');
const router = express.Router();
const logger = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');
const lodash = require('lodash');


router.get('/test-me', function (req, res) {
    
    //Module 1 members
    logger.welcome("radon")

    //Module 2 functions
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();

    
    formatter.trim();
    formatter.lowerCase();
    formatter.upperCase();


    res.send("Api works successfully, Check your terminal")
});
 
router.get('/hello', function(req,res){
  let allMonths =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  console.log("chunk in 4 equal part is:- ",_.chunk(allMonths,3 ));// Making chunks of size 3
  
  let arrOfOddNum =[1,3,5,7,9,11,13,15,17,19];
  console.log("By Using tail Function Last 9 ELements is :- ", _.tail(arrOfOddNum));

  let getUnion = _.union([1,2,3],[2,3,4],[3,9,5],[4,5,6],[5,8,7]);
  console.log("thi unique value returns lodash union:-" ,getUnion);
  
  let movies =[
      ["horror","The Shining"],
      ["drama","Titanic"],
      ["thriller","Shutter Island"],
      ["fantasy","Pans Labyrinth"]
    ]
  let objForm= _.fromPairs(movies);
  
console.log(objForm)

  res.send("Done! Successfully")
});

module.exports = router;