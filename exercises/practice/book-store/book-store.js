//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const bookPrice = 800; // cost of a single book in cents
  const discounts = [0, 5, 10, 20, 25]; // discounts for 1, 2, 3, 4, and 5 unique books
  let totalCost = 0;
  let uniqueSets = [];

  // Helper function to calculate cost of a set
  const calculateSetCost = (set) => {
    return set.length * bookPrice * (1 - discounts[set.length - 1] / 100);
  };

  // Sort books by frequency
  let bookCounts = books.reduce((countMap, book) => {
    countMap[book] = (countMap[book] || 0) + 1;
    return countMap;
  }, {});

  // Create sets of unique books
  while (Object.keys(bookCounts).length > 0) {
    let set = [];
    for (let book in bookCounts) {
      if (bookCounts[book] > 0) {
        set.push(book);
        bookCounts[book]--;
        if (bookCounts[book] === 0) {
          delete bookCounts[book];
        }
      }
    }
    uniqueSets.push(set);
  }

  // Calculate the cost of each set and sum the total cost
  uniqueSets.forEach(set => {
    totalCost += calculateSetCost(set);
  });

  return totalCost;
};
