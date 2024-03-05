//search -> search, filter
//produt ->  product listing by type

const productSchema=require("../model/ProductModel");

const feature={
      async allProduct(req,res,next){
        try{ 
           const item=await productSchema.find();
           res.status(200).json(item);
      }catch(err){next(err);}
     },
     async searchProduct(req,res,next){

        try{
            const keyword=(req.query.search).trim();
            const result=await productSchema.findOne({title:keyword});
            res.status(200).json(result);
        }catch(err){next(err);}
     }
}
module.exports=feature;


