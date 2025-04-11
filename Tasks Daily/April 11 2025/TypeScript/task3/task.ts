//User Interface
interface I_Users {
    id: number;
    name: string;
    email: string;
}

//Inventory Interface
interface I_Inventory {
    id: number;
}

//Customer Class
class Customer implements I_Users {
    id: number;
    name: string;
    email: string;
    salary: number;
    constructor(id: number, name: string, email: string, salary: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.salary = salary;
    }
}

//Supplier Class
class Supplier implements I_Users {
    id: number;
    name: string;
    email: string;
    company: string;
    constructor(id: number, name: string, email: string, company: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.company = company;
    }
}

//Product Class
class Product implements I_Inventory {
    id: number;
    name: string;
    price: number;
    stock: number;
    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

//Order Class
class Order implements I_Inventory {
    id: number;
    customer_id: number;
    product_id: number;
    quantity: number;
    order_date: string;
    constructor(
        id: number,
        customer_id: number,
        product_id: number,
        quantity: number,
        order_date: string
    ) {
        this.id = id;
        this.customer_id = customer_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.order_date = order_date;
    }
}

//Data Storage
const user: I_Users[] = [
    //Customer Data Storage
    new Customer(1, "A", "A", 100000),
    new Customer(2, "B", "B", 200000),
    new Customer(3, "C", "C", 150000),
    new Customer(4, "D", "D", 250000),
    new Customer(5, "E", "E", 300000),
    //Supplier Data Storage
    new Supplier(6, "M", "M", "ABC"),
    new Supplier(7, "N", "N", "UVW"),
    new Supplier(8, "O", "O", "XYZ"),
];

const inventories: I_Inventory[] = [
    //Product Data Storage
    new Product(1, "X", 200, 500),
    new Product(2, "Y", 150, 400),
    new Product(3, "Z", 500, 100),
    //Order Data Storage
    new Order(1, 2, 3, 5, "15/02/2025"),
    new Order(2, 5, 2, 10, "5/03/2025"),
    new Order(3, 3, 3, 2, "25/03/2025"),
];

//Function for Data Display
function displayOrderData() {
    inventories.forEach((inventory) => {
        if (inventory instanceof Order) {
            const customer = user.filter(
                (x) => x.id == inventory.customer_id
            )[0];
            const product = user.filter((y) => y.id == inventory.product_id)[0];

            console.log(
                `Order Id: ${inventory.id}, Customer Name: ${customer.name}, Product Name: ${product.name}, Quantity: ${inventory.quantity}, Order Date: ${inventory.order_date}`
            );
        }
    });
}

//Function Usage
displayOrderData();
