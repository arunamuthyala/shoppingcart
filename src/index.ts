import { Apple, Banana, Lime, Melon } from "./mockData";
import { calculatePrice } from "./utility";

console.log(
  "Price for [Apple, Apple, Banana, Melon, Lime] is ",
  calculatePrice([Apple, Apple, Banana, Melon, Lime])
);
console.log(
  "Price for [Apple, Apple, Banana] is ",
  calculatePrice([Apple, Apple, Banana])
);
