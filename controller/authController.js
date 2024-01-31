const customerSchema=require("../model/CustomerModel");
const fishermanSchma=require("../model/FishermanModel");
const adminSchema=require("../model/AdminModel");
const CryptoJs=require("crypto-js");
const CRYPTO_SECRET=require("../config/secret").CRYPTO_SECRET;
const JWT_SECRET=require("../config/secret").JWT_SECRET;
const jwt=require("jsonwebtoken");


const authController={
     async customerRegister(req,res,next){
        const newCustomer=new customerSchema({
            name:req.body.name,
            email:req.body.email,
            address:req.body.address,
            password: CryptoJs.AES.encrypt(req.body.password,CRYPTO_SECRET).toString(),
            role:"customer",
            contact: req.body.contact
         });
         try{
             await newCustomer.save();
             res.status(201).json({msg:"profile created, Please log in"});
         }catch(err){next(err);}
     },
     async fishermanRegister(res,req,next){

     },
     async adminRegister(res,req,next){

     },
      async customerLogIn(res,req,next){

      },
      async fishermanLogIn(res,req,next){

      },
      async adminLogIn(res,req,next){

      }

}

module.exports=authController;