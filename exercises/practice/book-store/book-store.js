//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  if (books.length === 0) {
    return 0;
  }

  const discounts = [0, 0.05, 0.10, 0.20, 0.25];
  const uniqueBooksCount = new Set(books).size;
  const maxDiscount = discounts[uniqueBooksCount];

  const remainingBooks = books.filter((book) => book !== "");
  const price = remainingBooks.length * 8;

  return price - price * maxDiscount;
};
