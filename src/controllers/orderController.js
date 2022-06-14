const {count}= require("console")
const UserModel= require("../models/userModel")
const ProductModel= require("../models/productModel")
const OrderModel= require("../models/orderModel")


const createOrder= async function(req,res){
    let data = req.body
    const savedData=await OrderModel.create(data)
    let allData=await OrderModel.find(savedData).populate("userId",{balance:1})
   res.send(allData)
  };
  
module.exports.createOrder= createOrder
