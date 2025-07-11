import { Product } from "../models/Product";
import { PhysicalProduct } from "../models/PhysicalProduct";

export function calculateTax(product: Product): number {
    if (product instanceof PhysicalProduct) {
        const taxRate = 0.1;
        return product.price + (product.price * taxRate);
    } else {
        return product.price;
    }
}