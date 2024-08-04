import { calculateTax } from "./taxJs";
import { add } from "./calculate";

console.log(calculateTax(100));

console.log(calculateTax(200)); // NaN

console.log(add(1, 2));