class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

//Constructor method
const student = new Person("Bob");
student.greet();

//Inheritance of classes
class Student_P extends Person {
    grade: number;
    constructor(name: string, grade: number) {
        super(name);
        this.grade = grade;
    }

    displayInfo(): void {
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}

const std = new Student_P("Bob", 5);
std.displayInfo();
