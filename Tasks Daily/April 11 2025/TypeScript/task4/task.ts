//Appointment Interface
interface I_Appointment {
    id: number;
    patient_id: number;
    doctor_id: number;
    date: string;
    reason: string;
}

//Person Class
class Person {
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

//Patient Class
class Patient extends Person {
    dob: string;
    constructor(id: number, name: string, email: string, dob: string) {
        super(id, name, email, "Patient");
        this.dob = dob;
    }
}

//Doctor Class
class Doctor extends Person {
    specialization: string;
    constructor(
        id: number,
        name: string,
        email: string,
        specialization: string
    ) {
        super(id, name, email, "Doctor");
        this.specialization = specialization;
    }
}

//Room Class
class Room {
    id: number;
    name: string;
    type: string;
    constructor(id: number, name: string, type: string) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

//Medicine Class
class Medicine {
    id: number;
    name: string;
    composition: string[];
    constructor(id: number, name: string, composition: string[]) {
        this.id = id;
        this.name = name;
        this.composition = composition;
    }
}

//Appointment Class
class Appointment implements I_Appointment {
    id: number;
    patient_id: number;
    doctor_id: number;
    date: string;
    reason: string;
    room_id: number;
    medicine_id: number;
    constructor(
        id: number,
        patient_id: number,
        doctor_id: number,
        date: string,
        reason: string,
        room_id: number,
        medicine_id: number
    ) {
        this.id = id;
        this.patient_id = patient_id;
        this.doctor_id = doctor_id;
        this.date = date;
        this.reason = reason;
        this.room_id = room_id;
        this.medicine_id = medicine_id;
    }
}

//Patients Data Storage
const patients: Patient[] = [
    new Patient(1, "A", "A", "15/07/2001"),
    new Patient(2, "B", "B", "05/11/2003"),
    new Patient(3, "C", "C", "25/04/2010"),
];

//Doctors Data Storage
const doctors: Doctor[] = [
    new Doctor(1, "Dr. X", "X", "Cardiology"),
    new Doctor(2, "Dr. Y", "Y", "Neurology"),
    new Doctor(3, "Dr. Z", "Z", "Pediatrics"),
];

//Rooms Data Storage
const rooms: Room[] = [
    new Room(1, "Room U", "Consultation"),
    new Room(2, "Room V", "Surgery"),
    new Room(3, "Room W", "Recovery"),
];

//Medicines Data Storage
const medicines: Medicine[] = [
    new Medicine(1, "Paracetamol", ["Paracetamol", "Starch"]),
    new Medicine(2, "Ibuprofen", ["Ibuprofen", "Lactose"]),
    new Medicine(3, "Amoxicillin", ["Amoxicillin", "Magnesium Stearate"]),
];

//Appointments Data Storage
const appointments: Appointment[] = [
    new Appointment(1, 1, 1, "12/03/2025", "Routine Checkup", 1, 1),
    new Appointment(2, 2, 2, "13/03/2025", "Headache Consultation", 2, 2),
    new Appointment(3, 3, 3, "14/03/2025", "Child Vaccination", 3, 3),
];

//Function for Data Display
function displayAppointmentData() {
    appointments.forEach((appointment) => {
        const patient = patients.filter(
            (a) => a.id == appointment.patient_id
        )[0];
        const doctor = doctors.filter((a) => a.id == appointment.doctor_id)[0];
        const room = rooms.filter((c) => c.id == appointment.room_id)[0];
        const medicine = medicines.filter(
            (d) => d.id == appointment.medicine_id
        )[0];

        console.log(
            `Appointment Id: ${appointment.id}, Patient Name: ${patient.name}, Doctor Name: ${doctor.name}, Date: ${appointment.date}, Reason: ${appointment.reason}, Room Name: ${room.name}, Medicine Name: ${medicine.name}`
        );
    });
}

//Function Usage
displayAppointmentData();
