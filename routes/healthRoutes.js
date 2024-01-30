const routes=require("express").Router();
const healthCheckController =require("../controller/healthCheck");

//Health Check
routes.get("/",healthCheckController.healthCheck);



//admin -  profile, approve of fisherman
//fisherman - add item, delete item, update item, profile
//customer -  user profile, 
//search
//order
//cart

module.exports=routes;
