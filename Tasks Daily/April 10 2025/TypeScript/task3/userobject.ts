//Interface
interface User {
    id: number;
    name: string;
}
const user: User = {
    id: 1,
    name: "Alice",
};

//Declaration and Initialization with an object
let car: { brand: string; year: number } = { brand: "Toyota", year: 2022 };

console.log(`${car.brand} was made in year ${car.year}`);
console.log(`Id ${user.id} has name ${user.name}`);
