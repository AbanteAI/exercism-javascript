//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const bookCounts = {};
  let totalCost = 0;

  books.forEach((book) => {
    bookCounts[book] = (bookCounts[book] || 0) + 1;
  });

  while (Object.keys(bookCounts).length > 0) {
    const distinctBooks = Object.keys(bookCounts).length;
    const discount = getDiscount(distinctBooks);
    const cost = distinctBooks * 800 * (1 - discount);
    totalCost += cost;

    Object.keys(bookCounts).forEach((book) => {
      bookCounts[book] -= 1;
      if (bookCounts[book] === 0) {
        delete bookCounts[book];
      }
    });
  }

  return totalCost;
};

const getDiscount = (distinctBooks) => {
  const discounts = [0, 0, 0.05, 0.10, 0.20, 0.25];
  return discounts[distinctBooks];
};
