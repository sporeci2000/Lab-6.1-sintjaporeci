import { Product } from "./Product";

export class PhysicalProduct extends Product {
    private weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax(): number {
        const taxRate = 0.1;
        return this.price + (this.price * taxRate);
    }


    get formattedWeightKg(): string {
        return `${this.weight} kg`;
    }

    displayDetails(): string {
        return super.displayDetails() + ` It weighs ${this.formattedWeightKg}`;
    }

}


