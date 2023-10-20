//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  switch (category) {
    case 'ones':
      return calculateScoreForNumber(dice, 1);
    case 'twos':
      return calculateScoreForNumber(dice, 2);
    case 'threes':
      return calculateScoreForNumber(dice, 3);
    case 'fours':
      return calculateScoreForNumber(dice, 4);
    case 'fives':
      return calculateScoreForNumber(dice, 5);
    case 'sixes':
      return calculateScoreForNumber(dice, 6);
    case 'full-house':
      return calculateScoreForFullHouse(dice);
    case 'four-of-a-kind':
      return calculateScoreForFourOfAKind(dice);
    case 'little-straight':
      return calculateScoreForLittleStraight(dice);
    case 'big-straight':
      return calculateScoreForBigStraight(dice);
    case 'choice':
      return calculateScoreForChoice(dice);
    case 'yacht':
      return calculateScoreForYacht(dice);
    default:
      return 0;
  }
};

const calculateScoreForNumber = (dice, number) => {
  return dice.filter((die) => die === number).reduce((sum, die) => sum + die, 0);
};

const calculateScoreForFullHouse = (dice) => {
  // Implement logic to calculate score for Full House category
};

const calculateScoreForFourOfAKind = (dice) => {
  // Implement logic to calculate score for Four of a Kind category
};

const calculateScoreForLittleStraight = (dice) => {
  // Implement logic to calculate score for Little Straight category
};

const calculateScoreForBigStraight = (dice) => {
  // Implement logic to calculate score for Big Straight category
};

const calculateScoreForChoice = (dice) => {
  // Implement logic to calculate score for Choice category
};

const calculateScoreForYacht = (dice) => {
  // Implement logic to calculate score for Yacht category
};
