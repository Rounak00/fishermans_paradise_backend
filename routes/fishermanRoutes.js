const routes=require("express").Router();
const fishermanController=require("../controller/fishermanController");
const {verifyFisherman}=require("../middleware/verification");
const MulterService=require("../service/multer");

routes.get("/profile",verifyFisherman,fishermanController.fishermanProfile);
routes.post("/addProduct",verifyFisherman,MulterService.single("image"),fishermanController.addProduct);
module.exports=routes;