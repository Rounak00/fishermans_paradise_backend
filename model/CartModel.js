const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
  customerID:{type:String,required:true},
  productID:{type:String,required:true},
  quantity:{type:String,required:true},
},{timestamps: true})

module.exports=mongoose.model("Cart",cartSchema);

