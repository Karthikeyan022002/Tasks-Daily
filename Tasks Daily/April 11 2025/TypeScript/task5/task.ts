//Base Class
class Ride {
    id: number;
    speed: number;
    capacity: number;
    type: string;
    constructor(id: number, speed: number, capacity: number, type: string) {
        this.id = id;
        this.speed = speed;
        this.capacity = capacity;
        this.type = type;
    }
}

//Derived Class
class Auto extends Ride {
    constructor(id: number, speed: number, capacity: number) {
        super(id, speed, capacity, "Auto");
    }
}
class Bike extends Ride {
    constructor(id: number, speed: number, capacity: number) {
        super(id, speed, capacity, "Bike");
    }
}
class Cycle extends Ride {
    constructor(id: number, speed: number, capacity: number) {
        super(id, speed, capacity, "Cycle");
    }
}

//Normal Class
class Rider {
    id: number;
    name: string;
    mobile: number;
    constructor(id: number, name: string, mobile: number) {
        this.id = id;
        this.name = name;
        this.mobile = mobile;
    }
}

//Generic Class
class Reserve<T> {
    constructor(public rider: Rider, public ride: T) {}
}

//Auto Data
const autos: Auto[] = [
    new Auto(1, 45, 2),
    new Auto(2, 40, 3),
    new Auto(3, 50, 4),
];

//Bike Data Storage
const bikes: Bike[] = [
    new Bike(1, 55, 1),
    new Bike(2, 50, 2),
    new Bike(3, 60, 3),
];

//Cycle Data Storage
const cycles: Cycle[] = [new Auto(1, 25, 1), new Auto(2, 20, 2)];

//Rider Data Storage
const riders: Rider[] = [
    new Rider(1, "A", 6435654),
    new Rider(2, "B", 2656254),
    new Rider(3, "C", 4562354),
];

//Reserve Data Storage
const reservations: Reserve<Ride>[] = [
    new Reserve(riders[0], bikes[2]),
    new Reserve(riders[1], autos[0]),
    new Reserve(riders[2], cycles[1]),
];

//Function for Data Display
function displayReservationData() {
    reservations.forEach((reservation) => {
        console.log(
            `Reservation Details are as follows:- 
            \nRider: ${reservation.rider.name} 
            \n(ID: ${reservation.rider.id}, Mobile: ${reservation.rider.mobile})
            \nRide: ${reservation.ride.type} 
            \n(ID: ${reservation.ride.id}, Speed: ${reservation.ride.speed}, Capacity: ${reservation.ride.capacity})
            \n------------------------------------------------------------------------------------------------------
            \n\n`
        );
    });
}

//Function Usage
displayReservationData();
