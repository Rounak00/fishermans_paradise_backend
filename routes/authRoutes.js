const routes=require("express").Router();
const authController=require("../controller/authController");
//authentication
// routes.post("/admin/login",)
// routes.post("/admin/register",)
// routes.post("/fisherman/login",)
// routes.post("/fisherman/register",)
// routes.post("/customer/login",)
// routes.post("/customer/register",)

routes.post("/customer/register",authController.customerRegister)
module.exports=routes;