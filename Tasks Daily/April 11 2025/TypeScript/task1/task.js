//Employee Class
var Employee = /** @class */ (function () {
    function Employee(id, name, department_id, manager_id) {
        this.id = id;
        this.name = name;
        this.department_id = department_id;
        this.manager_id = manager_id;
    }
    return Employee;
}());
//Manager Class
var Manager = /** @class */ (function () {
    function Manager(id, name, department_id, manager_id) {
        this.id = id;
        this.name = name;
        this.department_id = department_id;
        this.manager_id = manager_id;
    }
    return Manager;
}());
//Department Class
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    return Department;
}());
//Data Storage
var departments = [
    //Department Data Storage
    new Department(1, "Marketing"),
    new Department(2, "HR"),
    new Department(3, "Engineering"),
];
var employees = [
    //Employee Data Storage
    new Employee(1, "A", 1, 6),
    new Employee(2, "B", 2, 7),
    new Employee(3, "C", 3, 8),
    new Employee(4, "D", 1, 6),
    new Employee(5, "E", 3, 8),
    //Manager Data Storage
    new Manager(6, "X", 1, 7),
    new Manager(7, "Y", 2, 7),
    new Manager(8, "Z", 3, 7),
];
//Function for Data Display
function displayEmployeeData() {
    employees.forEach(function (employee) {
        var department = departments.filter(function (x) { return x.id == employee.department_id; })[0];
        var manager = employees.filter(function (y) { return y.id == employee.manager_id; })[0];
        console.log("Employee: ".concat(employee.name, ", Department: ").concat(department.name, ", Manager: ").concat(manager.name));
    });
}
//Function Usage
displayEmployeeData();
