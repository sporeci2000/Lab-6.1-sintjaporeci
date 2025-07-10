"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const products = [
    new PhysicalProduct_1.PhysicalProduct("PH-001", "Gaming Laptop", 1500, 2.5),
    new DigitalProduct_1.DigitalProduct("DG-101", "Photoshop License", 299.99, 500),
    new PhysicalProduct_1.PhysicalProduct("PH-002", "Bluetooth Speaker", 89.99, 1.2),
    new DigitalProduct_1.DigitalProduct("DG-202", "E-book: TypeScript Guide", 19.99, 120),
];
for (const product of products) {
    console.log("----- Product Info -----");
    console.log(product.displayDetails());
    console.log(`Final Price (with tax): $${(0, taxCalculator_1.calculateTax)(product).toFixed(2)}\n`);
}
