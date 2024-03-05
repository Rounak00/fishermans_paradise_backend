
//fisherman -> profile, add and update and delete product, remove after 24 hrs
const fishermanSchema=require("../model/FishermanModel");
const productSchema=require("../model/ProductModel");
const fs =require("fs");

const fishermanController={
    async fishermanProfile(req,res,next){
        try{
          const profile=await fishermanSchema.findById(req.user.id);
          res.status(200).json(profile);
        }catch(err){next(err);}
    },
    async addProduct(req,res,next){
            img=req.file.path;
            const newProduct=new productSchema({
                fishermanID: req.user.id,
                title:req.body.title,
                detail:req.body.detail,
                weight:req.body.weight,
                quantity:req.body.quantity,
                price:req.body.price,
                category:req.body.category,
                image: img
            });
        try{ 
        
           await newProduct.save();
           res.status(201).json({
            msg: "Product Added",
           });
        } catch (err) {
            fs.unlink(`${appRoot}/${img}`, (err) => {
              console.log("deleted");
           })
           next(err)
          }
    },
    async removeProduct(req,res,next){
        try{
          const item=await productSchema.findByIdAndDelete(req.params.id);
          res.status(200).json({msg:"Item delete successfully"});
        }catch(err){next(err);}
    },
    async updateProduct(req,res,next){
        try{
          const newItem={
            fishermanID: req.user.id,
            title: req.body.title,
            detail:req.body.detail,
            weight:req.body.weight,
            quantity:req.body.quantity,
            price:req.body.price,
            category:req.body.category,    
          };

          const i=await productSchema.findByIdAndUpdate(req.params.id,{$set:{newItem}});

        }catch(err){next(err);}
    },

}

module.exports=fishermanController;