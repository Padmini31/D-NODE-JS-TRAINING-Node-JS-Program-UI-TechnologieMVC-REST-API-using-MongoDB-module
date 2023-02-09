let empCollection = require("../config/dbConfig");
exports.getAllEmployees = async (request,response)=>{
    try{
    let result = await empCollection.getCollection("Employees").find().toArray();
    response.json(result);
}catch(ex){
    response.json("Error generated "+ex);
}
}

exports.findEmployeeById = async(request,response)=>{
    let empId= eval(request.params._id);
    console.log("hi");
    try{
        let result = await empCollection.getCollection("Employees").findOne({_id:empId});
        if(result==null){
            response.send("-record not found");
        }else{
        response.json(result);
        }
    }catch(ex){
        response.json("Error generated "+ex);
    }

}
//Find Employeesalary between 20k to 30k
exports.findEmpSal = async(request,response)=>{
    try{
        let result = await empCollection.getCollection("Employees").find({salary:{$gte:20000,$lte:30000}}).toArray();
        if(result==null){
            response.send("-record not found");
        }else{
        response.json(result);
        }}
    catch(ex){
        response.json("Error generated "+ex);
    }
}

//Find Employee age >21
exports.findEmpage = async(request,response)=>{
    try{
        let result = await empCollection.getCollection("Employees").find({age:{$gt:21}}).toArray();
        if(result==null){
            response.send("-record not found");
        }else{
        response.json(result);
        }}
    catch(ex){
        response.json("Error generated "+ex);
    }
}