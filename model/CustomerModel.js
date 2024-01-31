
const mongoose=require("mongoose");


const customerSchema=new mongoose.Schema({
  contact:{type:Number,required:true},
  role:{type:String,require:true,default:"customer"},
  email:{type:String,required:true},
  name:{type:String,required:true},
  address:{type:String,require:true},
  password:{type:String,require:true}
},{timestamps: true})

module.exports=mongoose.model("Customer",customerSchema);
 