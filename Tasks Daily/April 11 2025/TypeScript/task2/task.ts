//User Interface
interface I_User {
    id: number;
    name: string;
    email: string;
    role: string;
}

//Session Interface
interface I_Session {
    id: number;
    year: string;
    term: string;
}

//Student Class
class Student implements I_User {
    id: number;
    name: string;
    email: string;
    role: string;
    session_id: number;
    constructor(
        id: number,
        name: string,
        email: string,
        role: string,
        session_id: number
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.session_id = session_id;
    }
}

//Teacher Class
class Teacher implements I_User {
    id: number;
    name: string;
    email: string;
    role: string;
    constructor(id: number, name: string, email: string, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

//Admin Class
class Admin implements I_User {
    id: number;
    name: string;
    email: string;
    role: string;
    constructor(id: number, name: string, email: string, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

//Session Class
class Session implements I_Session {
    id: number;
    year: string;
    term: string;
    constructor(id: number, year: string, term: string) {
        this.id = id;
        this.year = year;
        this.term = term;
    }
}

//Data Storage
const sessions: Session[] = [
    //Session Data Storage
    new Session(1, "1", "2"),
    new Session(2, "2", "4"),
    new Session(3, "3", "6"),
];

const users: I_User[] = [
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
    users.forEach((user) => {
        if (user instanceof Student) {
            const session = sessions.filter((x) => x.id == user.session_id)[0];

            console.log(
                `User: ${user.name}, Role: ${user.role}, Session: ${
                    session.term || "N/A"
                }`
            );
        } else {
            console.log(`User: ${user.name}, Role: ${user.role}`);
        }
    });
}

//Function Usage
displayUserData();
