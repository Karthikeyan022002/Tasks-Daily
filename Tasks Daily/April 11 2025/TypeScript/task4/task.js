var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Person Class
var Person = /** @class */ (function () {
    function Person(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    return Person;
}());
//Patient Class
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(id, name, email, dob) {
        var _this = _super.call(this, id, name, email, "Patient") || this;
        _this.dob = dob;
        return _this;
    }
    return Patient;
}(Person));
//Doctor Class
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(id, name, email, specialization) {
        var _this = _super.call(this, id, name, email, "Doctor") || this;
        _this.specialization = specialization;
        return _this;
    }
    return Doctor;
}(Person));
//Room Class
var Room = /** @class */ (function () {
    function Room(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    return Room;
}());
//Medicine Class
var Medicine = /** @class */ (function () {
    function Medicine(id, name, composition) {
        this.id = id;
        this.name = name;
        this.composition = composition;
    }
    return Medicine;
}());
//Appointment Class
var Appointment = /** @class */ (function () {
    function Appointment(id, patient_id, doctor_id, date, reason, room_id, medicine_id) {
        this.id = id;
        this.patient_id = patient_id;
        this.doctor_id = doctor_id;
        this.date = date;
        this.reason = reason;
        this.room_id = room_id;
        this.medicine_id = medicine_id;
    }
    return Appointment;
}());
//Patients Data Storage
var patients = [
    new Patient(1, "A", "A", "15/07/2001"),
    new Patient(2, "B", "B", "05/11/2003"),
    new Patient(3, "C", "C", "25/04/2010"),
];
//Doctors Data Storage
var doctors = [
    new Doctor(1, "Dr. X", "X", "Cardiology"),
    new Doctor(2, "Dr. Y", "Y", "Neurology"),
    new Doctor(3, "Dr. Z", "Z", "Pediatrics"),
];
//Rooms Data Storage
var rooms = [
    new Room(1, "Room U", "Consultation"),
    new Room(2, "Room V", "Surgery"),
    new Room(3, "Room W", "Recovery"),
];
//Medicines Data Storage
var medicines = [
    new Medicine(1, "Paracetamol", ["Paracetamol", "Starch"]),
    new Medicine(2, "Ibuprofen", ["Ibuprofen", "Lactose"]),
    new Medicine(3, "Amoxicillin", ["Amoxicillin", "Magnesium Stearate"]),
];
//Appointments Data Storage
var appointments = [
    new Appointment(1, 1, 1, "12/03/2025", "Routine Checkup", 1, 1),
    new Appointment(2, 2, 2, "13/03/2025", "Headache Consultation", 2, 2),
    new Appointment(3, 3, 3, "14/03/2025", "Child Vaccination", 3, 3),
];
//Function for Data Display
function displayAppointmentData() {
    appointments.forEach(function (appointment) {
        var patient = patients.filter(function (a) { return a.id == appointment.patient_id; })[0];
        var doctor = doctors.filter(function (a) { return a.id == appointment.doctor_id; })[0];
        var room = rooms.filter(function (c) { return c.id == appointment.room_id; })[0];
        var medicine = medicines.filter(function (d) { return d.id == appointment.medicine_id; })[0];
        console.log("Appointment Id: ".concat(appointment.id, ", Patient Name: ").concat(patient.name, ", Doctor Name: ").concat(doctor.name, ", Date: ").concat(appointment.date, ", Reason: ").concat(appointment.reason, ", Room Name: ").concat(room.name, ", Medicine Name: ").concat(medicine.name));
    });
}
//Function Usage
displayAppointmentData();
