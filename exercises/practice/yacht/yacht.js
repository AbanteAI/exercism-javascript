//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  const counts = [0, 0, 0, 0, 0, 0];
  dice.forEach((value) => {
    counts[value - 1]++;
  });

  switch (category) {
    case "ones":
      return counts[0] * 1;
    case "twos":
      return counts[1] * 2;
    case "threes":
      return counts[2] * 3;
    case "fours":
      return counts[3] * 4;
    case "fives":
      return counts[4] * 5;
    case "sixes":
      return counts[5] * 6;
    case "full house":
      if (counts.includes(2) && counts.includes(3)) {
        return dice.reduce((sum, value) => sum + value, 0);
      }
      return 0;
    case "four of a kind":
      for (let i = 0; i < counts.length; i++) {
        if (counts[i] >= 4) {
          return i * 4;
        }
      }
      return 0;
    case "little straight":
      return dice.sort().join("") === "12345" ? 30 : 0;
    case "big straight":
      return dice.sort().join("") === "23456" ? 30 : 0;
    case "choice":
      return dice.reduce((sum, value) => sum + value, 0);
    case "yacht":
      return counts.includes(5) ? 50 : 0;
    default:
      return 0;
  }
};
