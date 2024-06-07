const routes=require("express").Router();
const adminController=require("../controller/adminController");
const {verifyAdmin}=require("../middleware/verification");

routes.get("/profile",verifyAdmin,adminController.adminProfile);
routes.get("/fishermansList",verifyAdmin,adminController.fishermanList); 
routes.get("/approvedFishermansList",verifyAdmin,adminController.approvedFishermanList);
routes.get("/notApprovedFishermansList",verifyAdmin,adminController.notApprovedFishermanList);
routes.put("/markNotApproved/:id",verifyAdmin,adminController.markNotApproved);
routes.put("/markApproved/:id",verifyAdmin,adminController.markApproved);
routes.get("/adminDashboard",verifyAdmin,adminController.adminDashboard);
module.exports=routes;
