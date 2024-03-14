
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
           const newPrice=req.query.quantity*productData.price;
          const Item=new orderSchema({
            customerID:req.user.id,
            productID:req.params.id,
            weight:productData.weight,
            orderedQuantity:req.query.quantity,
            unit:productData.unit,
            price:newPrice,
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
        const productInCart=await cartSchema.findOne({productID:req.params.id,
                                                      customerID:req.user.id });

        if(productInCart){ 
         
          try{ 
            const totalOrderedItem=productInCart.cartQuantity+1;
            if(productData.totalQuantity<totalOrderedItem){
             res.status(400).json({msg:"Don't Have That much Item"});
            }else{
              await cartSchema.findByIdAndUpdate(productInCart._id,{$set:{
               cartQuantity: totalOrderedItem
              }});
              res.status(200).json({msg:"added"});
            }
           }catch(err){next(err);}  
      }else{
        try{
          const Item=new cartSchema({
            weight:productData.weight,
            cartQuantity:1,
            price:productData.price,
            unit:productData.unit,
            customerID:req.user.id,
            productID:req.params.id,
          });
          await Item.save();
          res.status(200).json(Item);
        }catch(err){next(err);}
      }
       },
       async removeCart(req,res,next){
        const productData=await productSchema.findById(req.params.id);
        const productInCart=await cartSchema.findOne({productID:req.params.id,
                                                      customerID:req.user.id });
        
        if(productInCart===null){
          res.status(400).json({msg:"Product is not in cart"});
        }else if(productInCart.cartQuantity===1){
          
          await cartSchema.findByIdAndDelete(productInCart._id);
          res.status(200).json({msg:"removed from cart"});
        }else{
          const val=productInCart.cartQuantity-1;
          const item=await cartSchema.findByIdAndUpdate(productInCart._id,{$set:{cartQuantity:val}});
          res.status(200).json(item);
        }
       },
       async showCart(req,res,next){
        try{
           const Item=await cartSchema.find({customerID:req.user.id});
           res.status(200).json(Item);
        }catch(err){next(err);}
       }
       
}

module.exports=customerController;