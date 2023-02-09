let express = require("express");
let dbInfo = require("./config/dbConfig.js");
let employeeRouter =require("./router/employeeRouter");

let app = express();
dbInfo.dbConnect();
app.use(express.json());//extrac json, data from request body.to extrct data thru post ,we use this syntax.
 
app.get("/",(request,response)=>{
    response.send("Test")
})

//http://localhost:3000/api/employees/*
app.use("/api/employees",employeeRouter);//middleware //api/employees ->main path.whith help of this middleware("use"), 
app.listen(3000,()=>console.log("Server running on port number 3000"));