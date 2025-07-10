import { Product } from "../models/Product";

export function calculateTax(product: Product): number {
    return product.getPriceWithTax();
}