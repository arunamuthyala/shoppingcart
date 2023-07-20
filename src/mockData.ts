import { Item } from "./interface";

export const Apple: Item = {
  id: 1,
  name: "Apple",
  price: 35,
};
export const Banana: Item = {
  id: 2,
  name: "Banana",
  price: 20,
};
export const Melon: Item = {
  id: 3,
  name: "Melon",
  price: 50,
  discount: {
    saleQuantity: 2,
    originalQuantity: 1,
  },
};
export const Lime: Item = {
  id: 4,
  name: "Lime",
  price: 15,
  discount: {
    saleQuantity: 3,
    originalQuantity: 2,
  },
};
