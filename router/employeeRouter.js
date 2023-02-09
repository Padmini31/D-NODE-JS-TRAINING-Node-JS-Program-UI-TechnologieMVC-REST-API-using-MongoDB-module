let express = require("express");
let router = express.Router();
let employeeController = require("../controller/employeeController");

//http://localhost:3000/api/employees/getEmployee
router.get("/getEmployee",employeeController.getAllEmployees);

//http://localhost:3000/api/employees/findEmployeeById/6
router.get("/findEmployeeById/:_id",employeeController.findEmployeeById);


//http://localhost:3000/api/employees/findEmployeeSalary
router.get("/findEmployeeSalary",employeeController.findEmpSal);

//http://localhost:3000/api/employees/findEmpage
router.get("/findEmpage",employeeController.findEmpage);



module.exports=router;