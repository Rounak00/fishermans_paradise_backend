const mongoose=require("mongoose");


const adminSchema=new mongoose.Schema({
  name:{type:String,required:true},
  role:{type:String,},
  email:{type:String,required:true}
},{timestamps: true})

module.exports=mongoose.model("Admin",adminSchema);
