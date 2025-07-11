import { Product } from "./Product";
import { calculateTax } from "../utils/taxCalculator";

export class PhysicalProduct extends Product {
    private weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax(): number {
        return calculateTax(this);
    }


    get formattedWeightKg(): string {
        return `${this.weight} kg`;
    }

    displayDetails(): string {
        return super.displayDetails() + ` It weighs ${this.formattedWeightKg}`;
    }

}


