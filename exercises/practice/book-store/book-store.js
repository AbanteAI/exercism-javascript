//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const discounts = [0, 0, 0.05, 0.1, 0.2, 0.25];
  const bookCounts = new Array(5).fill(0);

  for (const book of books) {
    bookCounts[book - 1]++;
  }

  const calculateCost = (counts, discountIndex) => {
    const remainingBooks = counts.reduce((sum, count) => sum + count, 0);
    if (remainingBooks === 0) return 0;

    let minCost = Infinity;
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0) {
        counts[i]--;
        const cost = 800 * (1 - discounts[discountIndex]) + calculateCost(counts, discountIndex + 1);
        if (cost < minCost) minCost = cost;
        counts[i]++;
      }
    }

    return minCost;
  };

  return calculateCost(bookCounts, 1);
};
