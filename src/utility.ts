import { Item } from "./interface";

// returns key-value pair in this format {
//   Lime: 2,
//   Apple: 1
// }
export function getItemCount(items: Item[]): { [key: string]: number } {
  return items.reduce((result: { [key: string]: number }, item) => {
    const { name } = item;
    result[name] = (result[name] || 0) + 1;
    return result;
  }, {});
}

export const calulateTotal = (items: Item[]): number => {
  const totalValue: number = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  return totalValue;
};

export const calculatePrice = (items: Item[]) => {
  const discountItems = items.filter((item) => item?.discount != null);
  if (discountItems?.length <= 0) {
    // If there exists no discount at all
    return calulateTotal(items);
  } else {
    // If the list contains non-discounted items, then first calculate the total price for nonDiscountItems
    const nonDiscountItems = items.filter(
      (item) => item.discount === null || item.discount === undefined
    );
    const totalValueForNonDiscountItems: number =
      calulateTotal(nonDiscountItems);
    let totalValueForDiscountItems: number = 0;
    // If the list contains discounted items, then calculate the total price for discountItems
    const filteredList = getItemCount(discountItems);
    for (const key in filteredList) {
      const count = filteredList[key];
      const item = discountItems.find((item) => item.name === key);
      const { saleQuantity, originalQuantity } = item.discount;
      const { price } = item;
      let totalValueItem = 0;
      const countOfDiscountGroup = Math.floor(count / saleQuantity);
      const countOfOutOfDiscountGroup = count % saleQuantity;
      const totalCountExcludingTheOutOfDiscountGroup =
        count - countOfOutOfDiscountGroup;

      if (countOfDiscountGroup > 0) {
        const total = price * totalCountExcludingTheOutOfDiscountGroup;
        const discountedAmount =
          price * (saleQuantity - originalQuantity) * countOfDiscountGroup;
        totalValueItem = total - discountedAmount;
        totalValueForDiscountItems += totalValueItem;
      }

      if (countOfOutOfDiscountGroup >= 1) {
        const outOfSaleTotal = price * countOfOutOfDiscountGroup;
        totalValueForDiscountItems += outOfSaleTotal;
      }
    }

    return totalValueForNonDiscountItems + totalValueForDiscountItems;
  }
};
