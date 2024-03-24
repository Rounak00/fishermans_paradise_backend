const jwt=require("jsonwebtoken");
const JWT_SECRET=require("../config/secret").JWT_SECRET;

const verifyToken=(req,res,next)=>{
    const acctoken=req.headers.authorization;
    console.log(acctoken);
    if(!acctoken) return res.json({"msg":"user unauthorized"});
    else{
      const token=acctoken.split(" ")[1];
      jwt.verify(token,JWT_SECRET,function(err,user){
        if(err)return res.json({msg:"Token invalid"});
        req.user=user;
        next();
      })
    }
}
const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,() => {
        if(req.user.role==="admin"){
            next()
        }else{
            return res.json({ msg: "You are unauthorized" });
        }
    })
}
const verifyFisherman=(req,res,next)=>{
    verifyToken(req,res,() => {
        if(req.user.role==="fisherman"){
            next()
        }else{
            return res.json({ msg: "You are unauthorized" });
        }
    })
}

const verifyCustomer=(req,res,next)=>{
    verifyToken(req,res,() => {
        if(req.user.role==="customer"){
            next()
        }else{
            return res.json({ msg: "You are unauthorized" });
        }
    })
}

module.exports={verifyToken,verifyAdmin,verifyCustomer,verifyFisherman}