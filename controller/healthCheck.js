const healthCheckController={
    healthCheck(req,res,next){
       const health={
        uptime:process.uptime(),
        resposetime:process.hrtime(),
        message:"ok",
        timestamp:Date.now()
       }
       try{
        res.status(200).json(health);
       }catch(err){
         next(err);
       }
    }
}

module.exports= healthCheckController;