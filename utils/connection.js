const mongoose=require("mongoose");
const logger = require("./logger");
const DB_LINK=require("../config/secret").DB_LINK;

const connection=async()=>{
    try{
        await mongoose.connect(DB_LINK);
        logger.info("DB Connected !!!");
    }catch(err){
        logger.error(`Error in DB connection ${err}`);
    }
}


module.exports=connection;