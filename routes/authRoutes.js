const routes=require("express").Router();
const authController=require("../controller/authController");
const MulterService=require("../service/multer")
//authentication
// routes.post("/admin/login",)
// routes.post("/admin/register",)
// routes.post("/fisherman/login",)
// routes.post("/fisherman/register",)
// routes.post("/customer/login",)
// routes.post("/customer/register",)

routes.post("/customer/register",authController.customerRegister);
routes.post("/customer/login",authController.customerLogIn);
routes.post("/admin/register",authController.adminRegister);
routes.post("/admin/login",authController.adminLogIn);
routes.post("/fisherman/register",MulterService.single("image"),authController.fishermanRegister);
routes.post("/fisherman/login",authController.fishermanLogIn);
module.exports=routes;