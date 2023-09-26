//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  switch (category) {
    case "Ones":
      return calculateSumOfDice(dice, 1);
    case "Twos":
      return calculateSumOfDice(dice, 2);
    case "Threes":
      return calculateSumOfDice(dice, 3);
    case "Fours":
      return calculateSumOfDice(dice, 4);
    case "Fives":
      return calculateSumOfDice(dice, 5);
    case "Sixes":
      return calculateSumOfDice(dice, 6);
    case "Full House":
      return calculateFullHouseScore(dice);
    case "Four of a Kind":
      return calculateFourOfAKindScore(dice);
    case "Little Straight":
      return calculateLittleStraightScore(dice);
    case "Big Straight":
      return calculateBigStraightScore(dice);
    case "Choice":
      return calculateSumOfDice(dice);
    case "Yacht":
      return calculateYachtScore(dice);
    default:
      return 0;
  }
};

const calculateSumOfDice = (dice, value) => {
  return dice.filter((die) => die === value).reduce((sum, die) => sum + die, 0);
};

const calculateFullHouseScore = (dice) => {
  const counts = countDiceValues(dice);
  if (Object.values(counts).length === 2 && Object.values(counts).every((count) => count === 2 || count === 3)) {
    return dice.reduce((sum, die) => sum + die, 0);
  }
  return 0;
};

const calculateFourOfAKindScore = (dice) => {
  const counts = countDiceValues(dice);
  const fourOfAKindValue = Object.keys(counts).find((value) => counts[value] >= 4);
  if (fourOfAKindValue) {
    return dice.reduce((sum, die) => sum + die, 0);
  }
  return 0;
};

const calculateLittleStraightScore = (dice) => {
  const sortedDice = dice.sort();
  if (sortedDice.join("") === "12345") {
    return 30;
  }
  return 0;
};

const calculateBigStraightScore = (dice) => {
  const sortedDice = dice.sort();
  if (sortedDice.join("") === "23456") {
    return 30;
  }
  return 0;
};

const calculateYachtScore = (dice) => {
  const firstDie = dice[0];
  if (dice.every((die) => die === firstDie)) {
    return 50;
  }
  return 0;
};

const countDiceValues = (dice) => {
  return dice.reduce((counts, die) => {
    counts[die] = (counts[die] || 0) + 1;
    return counts;
  }, {});
};
