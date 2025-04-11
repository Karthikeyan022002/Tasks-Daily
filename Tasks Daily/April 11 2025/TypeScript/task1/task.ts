//Employee Interface
interface I_Employee {
    id: number;
    name: string;
    department_id: number;
    manager_id: number;
}

//Department Interface
interface I_Department {
    id: number;
    name: string;
}

//Employee Class
class Employee implements I_Employee {
    id: number;
    name: string;
    department_id: number;
    manager_id: number;
    constructor(
        id: number,
        name: string,
        department_id: number,
        manager_id: number
    ) {
        this.id = id;
        this.name = name;
        this.department_id = department_id;
        this.manager_id = manager_id;
    }
}

//Manager Class
class Manager implements I_Employee {
    id: number;
    name: string;
    department_id: number;
    manager_id: number;
    constructor(
        id: number,
        name: string,
        department_id: number,
        manager_id: number
    ) {
        this.id = id;
        this.name = name;
        this.department_id = department_id;
        this.manager_id = manager_id;
    }
}

//Department Class
class Department implements I_Department {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

//Data Storage
const departments: Department[] = [
    //Department Data Storage
    new Department(1, "Marketing"),
    new Department(2, "HR"),
    new Department(3, "Engineering"),
];

const employees: I_Employee[] = [
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
    employees.forEach((employee) => {
        const department = departments.filter(
            (x) => x.id == employee.department_id
        )[0];
        const manager = employees.filter((y) => y.id == employee.manager_id)[0];

        console.log(
            `Employee: ${employee.name}, Department: ${department.name}, Manager: ${manager.name}`
        );
    });
}

//Function Usage
displayEmployeeData();
