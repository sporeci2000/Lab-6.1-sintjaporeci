"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        const taxRate = 0.1;
        return this.price + (this.price * taxRate);
    }
    get formattedWeightKg() {
        return `${this.weight} kg`;
    }
    displayDetails() {
        return super.displayDetails() + ` It weighs ${this.formattedWeightKg}`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
