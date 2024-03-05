const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
  weight:{type:String,required:true},
  quantity:{type:String,required:true},
  price:{type:Number,required:true},
  customerID:{type:String,required:true},
  productID:{type:String,required:true},
  quantity:{type:String,required:true},
},{timestamps: true})

module.exports=mongoose.model("Cart",cartSchema);

