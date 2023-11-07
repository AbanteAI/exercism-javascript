//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  const counts = new Array(6).fill(0);
  dice.forEach(value => counts[value - 1]++);

  switch (category) {
    case 'Ones':
      return counts[0] * 1;
    case 'Twos':
      return counts[1] * 2;
    case 'Threes':
      return counts[2] * 3;
    case 'Fours':
      return counts[3] * 4;
    case 'Fives':
      return counts[4] * 5;
    case 'Sixes':
      return counts[5] * 6;
    case 'Full House':
      return counts.includes(2) && counts.includes(3) ? dice.reduce((a, b) => a + b, 0) : 0;
    case 'Four of a Kind':
      return counts.findIndex(count => count >= 4) !== -1 ? (counts.findIndex(count => count >= 4) + 1) * 4 : 0;
    case 'Little Straight':
      return dice.sort().join('') === '12345' ? 30 : 0;
    case 'Big Straight':
      return dice.sort().join('') === '23456' ? 30 : 0;
    case 'Choice':
      return dice.reduce((a, b) => a + b, 0);
    case 'Yacht':
      return counts.includes(5) ? 50 : 0;
    default:
      return 0;
  }
};
