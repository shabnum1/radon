const UserModel= require("../models/userModel")
const ProductModel= require("../models/productModel")
const OrderModel= require("../models/orderModel")




const createUser= async function(req,res){
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({data: savedData})

}



         module.exports.createUser=createUser
         