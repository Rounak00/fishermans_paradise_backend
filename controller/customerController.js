
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
             res.status(200).json({msg : " Profile updated successfully "})
           }catch(err){next(err);}
       },
       async addOrder(req,res,next){
        try{
          const userData=await customerSchema.findById(req.user.id);
          const productData=await productSchema.findById(req.params.id);
           
          const Item=new orderSchema({
            customerID:req.user.id,
            productID:req.params.id,
            weight:productData.weight,
            quantity:req.query.quantity,
            price:productData.price,
            contact:userData.contact,
            address:userData.address,
            status:req.query.stat
          })
          
         await Item.save();
           res.status(200).json(Item);
        }catch(err){next(err);}
       },
       async showOrder(req,res,next){
        try{
           const item=await orderSchema.find({customerID:req.user.id})
           res.status(200).json(item);
        }catch(err){next(err);}
       },
       async addCart(req,res,next){
        const productData=await productSchema.findById(req.params.id);
        try{
          const Item=new cartSchema({
            weight:productData.weight,
            quantity:productData.quantity,
            price:productData.price,
            customerID:req.user.id,
            productID:req.params.id,
          });
          await Item.save();
          res.status(200).json(Item);
        }catch(err){next(err);}
       },
       async removeCart(req,res,next){
        try{
          await cartSchema.findByIdAndDelete(req.params.id);
          res.status(200).json({ msg:" Removed Successfully "});
        }catch(err){next(err);}
       },
       async showCart(req,res,next){
        try{
           const Item=await cartSchema.find({customerID:req.user.id});
           res.status(200).json(Item);
        }catch(err){next(err);}
       }
       
}

module.exports=customerController;