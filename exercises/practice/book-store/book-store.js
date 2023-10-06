//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const prices = {
    1: 800,
    2: 1520,
    3: 2160,
    4: 2560,
    5: 3000,
  };

  const discounts = {
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  };

  const bookCounts = books.reduce((counts, book) => {
    counts[book] = (counts[book] || 0) + 1;
    return counts;
  }, {});

  const uniqueCounts = Object.values(bookCounts).filter((count) => count > 0).length;

  let totalCost = 0;
  while (uniqueCounts > 0) {
    totalCost += prices[uniqueCounts] * uniqueCounts * discounts[uniqueCounts];
    for (const book in bookCounts) {
      if (bookCounts[book] > 0) {
        bookCounts[book] -= 1;
      }
    }
    let uniqueCounts = Object.values(bookCounts).filter((count) => count > 0).length;
  }

  return totalCost;
};
