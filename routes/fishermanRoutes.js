const routes=require("express").Router();
const fishermanController=require("../controller/fishermanController");
const {verifyFisherman}=require("../middleware/verification");
const MulterService=require("../service/multer");

routes.get("/profile",verifyFisherman,fishermanController.fishermanProfile);
routes.post("/addProduct",verifyFisherman,MulterService.single("image"),fishermanController.addProduct);
routes.put("/updateProduct/:id",verifyFisherman,fishermanController.updateProduct)
routes.delete("/removeProduct/:id",verifyFisherman,fishermanController.removeProduct)

module.exports=routes;