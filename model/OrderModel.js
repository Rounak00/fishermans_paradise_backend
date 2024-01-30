const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
  customerID:{type:String,required:true},
  productID:{type:String,required:true},
  weight:{type:String,required:true},
  quantity:{type:String,required:true},
  price:{type:Number,required:true},
  contact:{type:Number,required:true},
  address:{type:String,required:true},
  status:{type:String,required:true},
  
},{timestamps: true})

module.exports=mongoose.model("Order",orderSchema);
