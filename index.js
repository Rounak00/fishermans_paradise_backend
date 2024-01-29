const express =require("express");
const connection =require("./utils/connection");
const PORT=require("./config/secret").PORT;
const routes=require("./Routes/routes");
const errorHandler=require("./middleware/errorHandler")
const app=express(routes);

app.use(express.json());
app.use(errorHandler);
app.use(routes);

app.listen(PORT,async()=>{ 
    console.log(`Server running at PORT ==> ${PORT}`);
    await connection(); 
})


