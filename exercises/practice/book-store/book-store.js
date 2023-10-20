//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
    const bookCounts = {};
    let totalCost = 0;

    // Count the number of occurrences of each book
    for (const book of books) {
        bookCounts[book] = (bookCounts[book] || 0) + 1;
    }

    // Calculate the cost based on the discounts
    while (Object.values(bookCounts).some(count => count > 0)) {
        const distinctBooks = Object.keys(bookCounts).filter(book => bookCounts[book] > 0);
        const distinctCount = distinctBooks.length;
        const discount = getDiscount(distinctCount);

        // Calculate the cost for the current set of distinct books
        const setCost = distinctCount * 800 * (1 - discount);

        // Update the book counts and total cost
        for (const book of distinctBooks) {
            bookCounts[book]--;
        }
        totalCost += setCost;
    }

    return totalCost;
};

// Helper function to get the discount based on the number of distinct books
const getDiscount = (distinctCount) => {
    switch (distinctCount) {
        case 2:
            return 0.05;
        case 3:
            return 0.10;
        case 4:
            return 0.20;
        case 5:
            return 0.25;
        default:
            return 0;
    }
};
