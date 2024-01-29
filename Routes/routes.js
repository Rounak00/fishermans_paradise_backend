const routes=require("express").Router();
const healthCheckController =require("../controller/healthCheck");

//Health Check
routes.get("/healthCheck",healthCheckController.healthCheck);

//authentication
routes.post("/admin/login",)
routes.post("/admin/register",)
routes.post("/fisherman/login",)
routes.post("/fisherman/register",)
routes.post("/customer/login",)
routes.post("/customer/register",)
//admin -  profile, approve of fisherman
//fisherman - add item, delete item, update item, profile
//customer -  user profile, 
//search
//order
//cart

module.exports=routes;
