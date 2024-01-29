const routes=require("express").Router();
const healthCheckController =require("../controller/healthCheck");

//Health Check
routes.get("/healthCheck",healthCheckController.healthCheck);



module.exports=routes;
