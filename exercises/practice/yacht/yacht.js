//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const countDice = (dice) => {
  const counts = new Array(7).fill(0);
  for (const die of dice) {
    counts[die]++;
  }
  return counts;
};

export const score = (dice, category) => {
  const counts = countDice(dice);

  switch (category) {
    case "Ones":
      return counts[1] * 1;
    case "Twos":
      return counts[2] * 2;
    case "Threes":
      return counts[3] * 3;
    case "Fours":
      return counts[4] * 4;
    case "Fives":
      return counts[5] * 5;
    case "Sixes":
      return counts[6] * 6;
    case "Full House":
      const threeOfAKind = counts.indexOf(3);
      const twoOfAKind = counts.lastIndexOf(2);
      return threeOfAKind > -1 && twoOfAKind > -1 ? (threeOfAKind * 3) + (twoOfAKind * 2) : 0;
    case "Four of a Kind":
      const fourOfAKind = counts.indexOf(4);
      return fourOfAKind > -1 ? fourOfAKind * 4 : 0;
    case "Little Straight":
      return counts.slice(1, 6).every(count => count === 1) ? 30 : 0;
    case "Big Straight":
      return counts.slice(2, 7).every(count => count === 1) ? 30 : 0;
    case "Choice":
      return dice.reduce((sum, die) => sum + die, 0);
    case "Yacht":
      return counts.indexOf(5) > -1 ? 50 : 0;
    default:
      return 0;
  }
};
  throw new Error('Remove this statement and implement this function');
};
