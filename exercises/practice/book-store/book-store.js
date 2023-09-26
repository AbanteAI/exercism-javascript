//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const bookPrices = [0, 800, 1520, 2160, 2560, 3000];
  const groupSize = 5;

  const calculateCost = (basket, group = []) => {
    if (basket.length === 0) {
      return group.reduce((total, book) => total + bookPrices[book], 0) / 100;
    }

    let minCost = Infinity;

    for (let i = 1; i <= groupSize; i++) {
      if (!group.includes(i) && basket.includes(i)) {
        const newBasket = basket.slice();
        newBasket.splice(newBasket.indexOf(i), 1);
        const newGroup = group.slice();
        newGroup.push(i);
        const cost = calculateCost(newBasket, newGroup);
        minCost = Math.min(minCost, cost);
      }
    }

    return minCost;
  };

  return calculateCost(books);
};
