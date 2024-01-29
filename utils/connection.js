const mongoose=require("mongoose");
const DB_LINK=require("../config/secret").DB_LINK;

const connection=async()=>{
    try{
        await mongoose.connect(DB_LINK);
        console.log("DB Connected !!!");
    }catch(err){
        console.log(`Error in DB connection ${err}`);
    }
}


module.exports=connection;