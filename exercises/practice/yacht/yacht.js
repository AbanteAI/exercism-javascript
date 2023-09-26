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
    case "Ones":
      return counts[0] * 1;
    case "Twos":
      return counts[1] * 2;
    case "Threes":
      return counts[2] * 3;
    case "Fours":
      return counts[3] * 4;
    case "Fives":
      return counts[4] * 5;
    case "Sixes":
      return counts[5] * 6;
    case "Full House":
      if (counts.includes(2) && counts.includes(3)) {
        return dice.reduce((a, b) => a + b, 0);
      }
      return 0;
    case "Four of a Kind":
      for (let i = 0; i < counts.length; i++) {
        if (counts[i] >= 4) {
          return i + 1;
        }
      }
      return 0;
    case "Little Straight":
      if (dice.includes(1) && dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5)) {
        return 30;
      }
      return 0;
    case "Big Straight":
      if (dice.includes(2) && dice.includes(3) && dice.includes(4) && dice.includes(5) && dice.includes(6)) {
        return 30;
      }
      return 0;
    case "Choice":
      return dice.reduce((a, b) => a + b, 0);
    case "Yacht":
      if (counts.includes(5)) {
        return 50;
      }
      return 0;
    default:
      return 0;
  }
};
