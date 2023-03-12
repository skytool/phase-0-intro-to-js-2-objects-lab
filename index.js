// Write your solution in this file!
const employee = {name: "Cindy", address:"101 main street"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function  deleteFromEmployeeByKey(employee, key){
    const employee1 = {...employee};
    delete employee1[key];
 
    return employee1;
}

function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    return employee;

}