const routes=require("express").Router();
const customerController=require("../controller/customerController");
const {verifyToken,verifyCustomer}=require("../middleware/verification");



module.exports=routes;