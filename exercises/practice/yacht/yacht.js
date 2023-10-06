//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  if (category.toLowerCase() === 'ones') {
    return dice.filter(d => d === 1).reduce((sum, d) => sum + d, 0);
  }
  if (category.toLowerCase() === 'twos') {
    return dice.filter(d => d === 2).reduce((sum, d) => sum + d, 0);
  }
  if (category.toLowerCase() === 'threes') {
    return dice.filter(d => d === 3).reduce((sum, d) => sum + d, 0);
  }
  if (category.toLowerCase() === 'fours') {
    return dice.filter(d => d === 4).reduce((sum, d) => sum + d, 0);
  }
  if (category.toLowerCase() === 'fives') {
    return dice.filter(d => d === 5).reduce((sum, d) => sum + d, 0);
  }
  if (category.toLowerCase() === 'sixes') {
    return dice.filter(d => d === 6).reduce((sum, d) => sum + d, 0);
  }
  if (category.toLowerCase() === 'full house') {
    const counts = new Map();
    for (const d of dice) {
      counts.set(d, (counts.get(d) || 0) + 1);
    }
    const [three, two] = [...counts.values()].sort();
    if (three === 2 && two === 3) {
      return dice.reduce((sum, d) => sum + d, 0);
    }
    return 0;
  }
  if (category.toLowerCase() === 'four of a kind') {
    const counts = new Map();
    for (const d of dice) {
      counts.set(d, (counts.get(d) || 0) + 1);
    }
    for (const [d, count] of counts.entries()) {
      if (count >= 4) {
        return d * 4;
      }
    }
    return 0;
  }
  if (category.toLowerCase() === 'little straight') {
    const set = new Set(dice);
    if (set.size === 5 && !set.has(6)) {
      return 30;
    }
    return 0;
  }
  if (category.toLowerCase() === 'big straight') {
    const set = new Set(dice);
    if (set.size === 5 && !set.has(1)) {
      return 30;
    }
    return 0;
  }
  if (category.toLowerCase() === 'choice') {
  return 0;
};
