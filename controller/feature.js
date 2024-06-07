//search -> search, filter
//produt ->  product listing by type

const productSchema=require("../model/ProductModel");

const feature={
    async product(req,res,next){
        let ID=req.params.id;
        try{ 
           const item=await productSchema.findById(ID);
           res.status(200).json(item);
      }catch(err){next(err);}
     },
      async allProduct(req,res,next){
        try{ 
           const item=await productSchema.find();
           res.status(200).json(item);
      }catch(err){next(err);}
     },
     async searchProduct(req,res,next){

        try{
         const { limit}=req.query;
         const { title}= req.body;
         if (title) {
             const query = {
                 title: { $regex: title, $options: 'i' }
             };  
             try {
                 const products = await productSchema.find(query);
                 return res.status(200).json(products);
             } catch (error) {
                 return next(error);
             }
         } else {
             const products = await products.find().sort({ createdAt: -1 });
             return res.status(200).json(products);
         }
        }catch(err){next(err);}
     },
     async riverProducts(req,res,next){
        try{
         const products=productSchema.find({Category: "sea"});
         res.status(200).json(products);
        }catch(err){next(err);}
     },
     async buy(req,res,next){
        const item=await productSchema.findById(req.params.id);
        const val=item.totalQuantity-1;
        let prod;
        if(!val){prod=await productSchema.findByIdAndDelete(req.params.id);}
        else{ prod=await productSchema.findByIdAndUpdate(req.params.id,{$set:{totalQuantity:val}})};

        res.status(200).json(prod);
        
     },
     async cartBuy(req,res,next){}
}
module.exports=feature;


