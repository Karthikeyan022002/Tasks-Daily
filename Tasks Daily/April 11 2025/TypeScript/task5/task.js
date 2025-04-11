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
//Base Class
var Ride = /** @class */ (function () {
    function Ride(id, speed, capacity, type) {
        this.id = id;
        this.speed = speed;
        this.capacity = capacity;
        this.type = type;
    }
    return Ride;
}());
//Derived Class
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(id, speed, capacity) {
        return _super.call(this, id, speed, capacity, "Auto") || this;
    }
    return Auto;
}(Ride));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(id, speed, capacity) {
        return _super.call(this, id, speed, capacity, "Bike") || this;
    }
    return Bike;
}(Ride));
var Cycle = /** @class */ (function (_super) {
    __extends(Cycle, _super);
    function Cycle(id, speed, capacity) {
        return _super.call(this, id, speed, capacity, "Cycle") || this;
    }
    return Cycle;
}(Ride));
//Normal Class
var Rider = /** @class */ (function () {
    function Rider(id, name, mobile) {
        this.id = id;
        this.name = name;
        this.mobile = mobile;
    }
    return Rider;
}());
//Generic Class
var Reserve = /** @class */ (function () {
    function Reserve(rider, ride) {
        this.rider = rider;
        this.ride = ride;
    }
    return Reserve;
}());
//Auto Data
var autos = [
    new Auto(1, 45, 2),
    new Auto(2, 40, 3),
    new Auto(3, 50, 4),
];
//Bike Data Storage
var bikes = [
    new Bike(1, 55, 1),
    new Bike(2, 50, 2),
    new Bike(3, 60, 3),
];
//Cycle Data Storage
var cycles = [new Auto(1, 25, 1), new Auto(2, 20, 2)];
//Rider Data Storage
var riders = [
    new Rider(1, "A", 6435654),
    new Rider(2, "B", 2656254),
    new Rider(3, "C", 4562354),
];
//Reserve Data Storage
var reservations = [
    new Reserve(riders[0], bikes[2]),
    new Reserve(riders[1], autos[0]),
    new Reserve(riders[2], cycles[1]),
];
//Function for Data Display
function displayReservationData() {
    reservations.forEach(function (reservation) {
        console.log("Reservation Details are as follows:- \n            \nRider: ".concat(reservation.rider.name, " \n            \n(ID: ").concat(reservation.rider.id, ", Mobile: ").concat(reservation.rider.mobile, ")\n            \nRide: ").concat(reservation.ride.type, " \n            \n(ID: ").concat(reservation.ride.id, ", Speed: ").concat(reservation.ride.speed, ", Capacity: ").concat(reservation.ride.capacity, ")\n            \n------------------------------------------------------------------------------------------------------\n            \n\n"));
    });
}
//Function Usage
displayReservationData();
