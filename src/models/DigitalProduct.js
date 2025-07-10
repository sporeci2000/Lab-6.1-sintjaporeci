"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get formattedFileSizeMB() {
        return `${this.fileSize} MB`;
    }
    displayDetails() {
        return `${super.displayDetails()} and is a digital download of ${this.formattedFileSizeMB}`;
    }
}
exports.DigitalProduct = DigitalProduct;
