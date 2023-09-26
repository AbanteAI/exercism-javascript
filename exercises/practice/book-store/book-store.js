//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const BOOK_PRICE = 8;
  const DISCOUNTS = [0, 0, 0.05, 0.10, 0.20, 0.25];
  
  const bookCounts = [0, 0, 0, 0, 0];
  books.forEach((book) => {
    bookCounts[book]++;
  });

  let totalPrice = 0;
  while (bookCounts.some((count) => count > 0)) {
    const uniqueBooks = bookCounts.filter((count) => count > 0).length;
    let maxDiscount = 0;
    for (let i = 1; i <= uniqueBooks; i++) {
      const discount = DISCOUNTS[i];
      const currentPrice = i * BOOK_PRICE * (1 - discount);
      if (currentPrice > maxDiscount) {
        maxDiscount = currentPrice;
      }
    }

    totalPrice += maxDiscount;
    bookCounts.forEach((count, index) => {
      if (count > 0) {
        bookCounts[index]--;
      }
    });
  }

  return totalPrice;
};
