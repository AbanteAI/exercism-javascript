//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  const counts = new Array(6).fill(0);
  dice.forEach(die => counts[die - 1]++);

  switch (category) {
    case 'ones':
    case 'twos':
    case 'threes':
    case 'fours':
    case 'fives':
    case 'sixes':
      const value = parseInt(category[0]);
      return counts[value - 1] * value;
    case 'full house':
      const threeOfAKind = counts.indexOf(3) + 1;
      const twoOfAKind = counts.indexOf(2) + 1;
      return threeOfAKind && twoOfAKind ? threeOfAKind * 3 + twoOfAKind * 2 : 0;
    case 'four of a kind':
      const fourOfAKind = counts.indexOf(4) + 1;
      return fourOfAKind ? fourOfAKind * 4 : 0;
    case 'little straight':
      return counts.slice(0, 5).every(count => count === 1) ? 30 : 0;
    case 'big straight':
      return counts.slice(1).every(count => count === 1) ? 30 : 0;
    case 'choice':
      return dice.reduce((sum, die) => sum + die, 0);
    case 'yacht':
      return counts.some(count => count === 5) ? 50 : 0;
    default:
      return 0;
  }
};
