//Customer Class
var Customer = /** @class */ (function () {
    function Customer(id, name, email, salary) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.salary = salary;
    }
    return Customer;
}());
//Supplier Class
var Supplier = /** @class */ (function () {
    function Supplier(id, name, email, company) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.company = company;
    }
    return Supplier;
}());
//Product Class
var Product = /** @class */ (function () {
    function Product(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    return Product;
}());
//Order Class
var Order = /** @class */ (function () {
    function Order(id, customer_id, product_id, quantity, order_date) {
        this.id = id;
        this.customer_id = customer_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.order_date = order_date;
    }
    return Order;
}());
//Data Storage
var user = [
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
var inventories = [
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
    inventories.forEach(function (inventory) {
        if (inventory instanceof Order) {
            var customer = user.filter(function (x) { return x.id == inventory.customer_id; })[0];
            var product = user.filter(function (y) { return y.id == inventory.product_id; })[0];
            console.log("Order Id: ".concat(inventory.id, ", Customer Name: ").concat(customer.name, ", Product Name: ").concat(product.name, ", Quantity: ").concat(inventory.quantity, ", Order Date: ").concat(inventory.order_date));
        }
    });
}
//Function Usage
displayOrderData();
