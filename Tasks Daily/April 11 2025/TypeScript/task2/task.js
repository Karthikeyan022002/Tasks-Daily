//Student Class
var Student = /** @class */ (function () {
    function Student(id, name, email, role, session_id) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.session_id = session_id;
    }
    return Student;
}());
//Teacher Class
var Teacher = /** @class */ (function () {
    function Teacher(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    return Teacher;
}());
//Admin Class
var Admin = /** @class */ (function () {
    function Admin(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    return Admin;
}());
//Session Class
var Session = /** @class */ (function () {
    function Session(id, year, term) {
        this.id = id;
        this.year = year;
        this.term = term;
    }
    return Session;
}());
//Data Storage
var sessions = [
    //Session Data Storage
    new Session(1, "1", "2"),
    new Session(2, "2", "4"),
    new Session(3, "3", "6"),
];
var users = [
    //Student Data Storage
    new Student(1, "A", "A", "Student", 1),
    new Student(2, "B", "B", "Student", 2),
    new Student(3, "C", "C", "Student", 1),
    new Student(4, "D", "D", "Student", 2),
    new Student(5, "E", "E", "Student", 3),
    //Teacher Data Storage
    new Teacher(6, "M", "M", "Teacher"),
    new Teacher(7, "N", "N", "Teacher"),
    new Teacher(8, "O", "O", "Teacher"),
    //Admin Data Storage
    new Admin(9, "Z", "Z", "Admin"),
];
//Function for Data Display
function displayUserData() {
    users.forEach(function (user) {
        if (user instanceof Student) {
            var session = sessions.filter(function (x) { return x.id == user.session_id; })[0];
            console.log("User: ".concat(user.name, ", Role: ").concat(user.role, ", Session: ").concat(session.term || "N/A"));
        }
        else {
            console.log("User: ".concat(user.name, ", Role: ").concat(user.role));
        }
    });
}
//Function Usage
displayUserData();
