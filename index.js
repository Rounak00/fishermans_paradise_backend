const express =require("express");
const connection =require("./utils/connection");
const cors=require("cors");
const PORT=require("./config/secret").PORT;
const healthRoutes=require("./routes/healthRoutes");
const authRoutes=require("./routes/authRoutes");
const adminRoute=require("./routes/adminRoutes");
const customerRoute=require("./routes/customerRoutes");
const fishermanRoute=require("./routes/fishermanRoutes");
const errorHandler=require("./middleware/errorHandler");
const logger = require("./utils/logger");
const path=require("path");
const app=express();

global.appRoot = path.resolve(__dirname);

app.use(
    cors({
        origin: [
            "http://localhost:5173",
        ],
        credentials: true,
    }),
);
app.use(express.json());
app.use(errorHandler);
app.use("/api/health",healthRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/admin",adminRoute);
app.use("/api/fisherman",fishermanRoute);
app.use("/api",customerRoute)

app.listen(PORT,async()=>{ 
    logger.info(`Server running at PORT ==> ${PORT}`);
    await connection(); 
})




//admin -> admin profile, list of fisherman - approver fisherman - reject fisherman, apporved fisherman, 
//          [admin profile admin stat -total user, total fisherman, total approved fisherman, total blocked fisherman]

//customer -> profile, profile update, add order, add & remove cart
//fisherman -> profile, profile update, add and update and delete product, remove after 24 hrs


//multer -? user, fisherman, liscence, product