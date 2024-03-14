const routes=require("express").Router();
const customerController=require("../controller/customerController");
const featureController=require("../controller/feature")
const {verifyCustomer}=require("../middleware/verification");



routes.get("/profile",verifyCustomer,customerController.profile);
routes.put("/updateProfile",verifyCustomer,customerController.profileUpdate);
routes.get("/products",featureController.allProduct);
routes.get("/searchProduct",featureController.searchProduct);
routes.post("/addOrder/:id",verifyCustomer,customerController.addOrder);
routes.get("/showOrder",verifyCustomer,customerController.showOrder);

routes.post("/addCart/:id",verifyCustomer,customerController.addCart);
routes.get("/showCart",verifyCustomer,customerController.showCart);
routes.delete("/removeCart/:id",verifyCustomer,customerController.removeCart)


routes.put("/buy/:id",verifyCustomer,featureController.buy);
module.exports=routes;