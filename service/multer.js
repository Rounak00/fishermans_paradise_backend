const multer=require("multer");
const path=require("path");

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'public/upload/');
    },
    filename:(req,file,cb)=>{
        const uniqueName = `${Date.now()}-${Math.round(Math.random()*1e9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

 const MulterService = multer({
    storage,
    limits:{fileSize:100000000000000*2}
});

module.exports=MulterService;