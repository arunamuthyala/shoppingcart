import { Apple, Banana, Lime, Melon } from "../mockData";
import { calculatePrice } from "../utility";
describe("calculatePrice", () => {
  it("should calculate the total price without any discounts", () => {
    const items = [Apple, Apple, Banana, Melon];
    const totalPrice = calculatePrice(items);
    expect(totalPrice).toBe(140); // (2 * 35) + 20 + 50 = 140
  });
  it("should calculate the total price with Lime discount", () => {
    const items = [Apple, Lime, Lime, Lime, Melon];
    const totalPrice = calculatePrice(items);
    expect(totalPrice).toBe(115); // 35 + 2 * 15 + 50 = 115 (3 for 2 discount on Lime)
  });
  it("should calculate the total price with Melon discount", () => {
    const items = [Apple, Melon, Melon, Melon, Banana];
    const totalPrice = calculatePrice(items);
    expect(totalPrice).toBe(155); // 35 + 2 * 50 + 20 = 155 (2 Melons for the price of 1)
  });
  it("should calculate the total price with both Lime and Melon discount", () => {
    const items = [Lime, Lime, Melon, Melon, Banana];
    const totalPrice = calculatePrice(items);
    expect(totalPrice).toBe(100); // 2 * 15 + 50 + 20 = 100 (3 for 2 discount on Lime, 2 Melons for the price of 1)
  });
  it("should calculate the total price with multiple items and discounts", () => {
    const items = [Apple, Apple, Lime, Lime, Lime, Melon, Melon, Melon, Banana];
    const totalPrice = calculatePrice(items);
    expect(totalPrice).toBe(220); // (2 * 35) + 2 * 15 + 2 * 50 + 20 = 220 (3 for 2 discount on Lime, 2 Melons for the price of 1)
  });
});
