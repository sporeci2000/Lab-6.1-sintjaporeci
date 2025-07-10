import { Product } from "./Product";

export class DigitalProduct extends Product {
    private fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    getPriceWithTax(): number {
        return this.price;
    }

    get formattedFileSizeMB(): string {
        return `${this.fileSize} MB`;
    }

    displayDetails(): string {
        return `${super.displayDetails()} and is a digital download of ${this.formattedFileSizeMB}`;
    }
}