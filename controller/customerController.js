
//customer -> profile, profile update, add order, add & remove cart

const customerSchema=require("../model/CustomerModel");
const productSchema=require("../model/ProductModel");
const orderSchema=require("../model/OrderModel");
const cartSchema=require("../model/CartModel");


const customerController={
       async profile(req,res,next){
           try{
            const user=await customerSchema.findById(req.user.id);
            res.status(200).json(user);
           }catch(err){next(err);}
       },
       async profileUpdate(req,res,next){
           try{
             const user=req.body;
             const newProfile=await customerSchema.findByIdAndUpdate(req.user.id,user);
           }catch(err){next(err);}
       },
       async addOrder(req,res,next){
        try{
        }catch(err){next(err);}
       },
       async showOrder(req,res,next){
        try{}catch(err){next(err);}
       },
       async addCart(req,res,next){
        try{}catch(err){next(err);}
       },
       async removeCart(req,res,next){
        try{}catch(err){next(err);}
       },
       async showCart(req,res,next){
        try{}catch(err){next(err);}
       }
       
}

module.exports=customerController;