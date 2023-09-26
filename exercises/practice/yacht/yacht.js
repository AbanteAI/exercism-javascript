//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const countDice = (dice) => {
  const counts = new Array(6).fill(0);
  for (const die of dice) {
    counts[die - 1] += 1;
  }
  return counts;
};

export const score = (dice, category) => {
  const counts = countDice(dice);
  const sum = (acc, val, idx) => acc + (idx + 1) * val;
  const total = counts.reduce(sum, 0);
  const maxCount = Math.max(...counts);

  switch (category) {
    case "Ones":
    case "Twos":
    case "Threes":
    case "Fours":
    case "Fives":
    case "Sixes":
      return counts[category[0] - "1"] * (category[0] - "0");
    case "Full House":
      return (counts.includes(3) && counts.includes(2)) ? total : 0;
    case "Four of a Kind":
      return (maxCount >= 4) ? 4 * (counts.indexOf(4) + 1) : 0;
    case "Little Straight":
      return (counts.slice(0, 5).every(c => c === 1) && counts[5] === 0) ? 30 : 0;
    case "Big Straight":
      return (counts.slice(1).every(c => c === 1) && counts[0] === 0) ? 30 : 0;
    case "Choice":
      return total;
    case "Yacht":
      return (maxCount === 5) ? 50 : 0;
    default:
      return 0;
  }
};
