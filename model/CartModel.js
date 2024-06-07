const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
  weight:{type:Number,required:true},
  unit:{type:String,required:true},
  price:{type:Number,required:true},
  customerID:{type:String,required:true},
  productID:{type:String,required:true},
  cartQuantity:{type:Number,required:true},
},{timestamps: true})

module.exports=mongoose.model("Cart",cartSchema);

