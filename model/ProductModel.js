const mongoose=require("mongoose");
const AppURL=require("../config/secret").AppURL;

const productSchema=new mongoose.Schema({
  fishermanID:{type:String,required:true},
  title:{type:String,},
  detail:{type:String,required:true},
  image:{type:String,required:true, get:(image)=>{
    
    return `${AppURL}/${image}`;
  }},
  unit:{type:String,required:true},
  weight:{type:Number,required:true},
  totalQuantity:{type:Number,required:true},
  price:{type:Number,required:true},
  category:{type:String,required:true},
},{timestamps: true, toJSON:{getters:true}})

module.exports=mongoose.model("Product",productSchema);
// Product [ color: gray] {
//     id string pk
//     fisherman_id string
//     title string
//     details string
//     weight string
//     //   weight 200gm
//     quantity number
//     //   quantity 1=>200 2=>400
//     price number
//     category string
//     // sea, river, pond, other
//   }