const mongoose=require("mongoose");


const fishermanSchema=new mongoose.Schema({
  contact:{type:Number,required:true},
  role:{type:String,require:true},
  email:{type:String,required:true},
  approve:{type:Boolean,require:true},
  license:{type:String,require:true},
  password:{type:String,require:true}
},{timestamps: true})

module.exports=mongoose.model("Fisherman",fishermanSchema);

