import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

const physicalProducts: PhysicalProduct[] = [
  new PhysicalProduct("GL-021", "Gaming Laptop", 2000, 3.5),
  new PhysicalProduct("TT-002", "Tablet", 129.99, 1.6),
];

const digitalProducts: DigitalProduct[] = [
  new DigitalProduct("VE-101", "Video editor", 99.99, 300),
  new DigitalProduct("DC-211", "Digital course", 39.99, 150),
];


physicalProducts.forEach(p => {
  console.log(p.displayDetails());
  console.log(`Final Price with tax is: $${p.getPriceWithTax().toFixed(2)}\n`);
});

digitalProducts.forEach(p => {
  console.log(p.displayDetails());
  console.log(`Final Price is: $${p.getPriceWithTax().toFixed(2)}\n`);
});