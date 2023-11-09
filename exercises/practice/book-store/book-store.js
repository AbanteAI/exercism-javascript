//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
const groupCost = (groupSize, discount) => {
  const bookPrice = 800; // 8 dollars in cents
  return groupSize * bookPrice * (1 - discount);
};

module.exports.cost = (books) => {
  const discounts = [0, 0.05, 0.1, 0.2, 0.25];
  let totalCost = 0;

  while (books.length > 0) {
    let uniqueBooks = [...new Set(books)];
    let groupSize = uniqueBooks.length;

    totalCost += groupCost(groupSize, discounts[groupSize - 1]);

    // Remove the books in the current group
    uniqueBooks.forEach((book) => {
      let index = books.indexOf(book);
      books.splice(index, 1);
    });
  }

  return totalCost;
};
  throw new Error('Remove this statement and implement this function');
};
