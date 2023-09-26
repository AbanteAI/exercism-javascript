//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const handValue = (hand) => {
  // Function to calculate the value of a poker hand
};

const compareHands = (hand1, hand2) => {
  // Function to compare two poker hands, returning -1, 0, or 1
};

const handValue = (hand) => {
  // Function to calculate the value of a poker hand
};

const compareHands = (hand1, hand2) => {
  // Function to compare two poker hands, returning -1, 0, or 1
};

export const bestHands = (hands) => {
  let bestHand = hands[0];
  let bestHandValue = handValue(bestHand);

  for (let i = 1; i < hands.length; i++) {
    const currentHandValue = handValue(hands[i]);
    const comparison = compareHands(bestHandValue, currentHandValue);

    if (comparison === -1) {
      bestHand = hands[i];
      bestHandValue = currentHandValue;
    } else if (comparison === 0) {
      bestHand.push(hands[i]);
    }
  }

  return bestHand;
};
  throw new Error('Remove this statement and implement this function');
};
