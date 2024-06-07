const mongoose=require("mongoose");


const adminSchema=new mongoose.Schema({
  name:{type:String,required:true},
  role:{type:String,default:"admin"},
  email:{type:String,required:true,unique: true},
  password:{type:String,require:true}
},{timestamps: true})

module.exports=mongoose.model("Admin",adminSchema);
