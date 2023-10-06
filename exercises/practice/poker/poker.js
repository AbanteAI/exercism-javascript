//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const bestHands = (hands) => {
  const ranks = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
  };

  const getRank = (card) => ranks[card[0]];
  const sortByRank = (hand) => hand.sort((a, b) => getRank(b) - getRank(a));
  const isFlush = (hand) => new Set(hand.map(card => card[1])).size === 1;
  const isStraight = (hand) => {
    const sortedHand = sortByRank(hand);
    return sortedHand.every((card, index) => index === 0 || getRank(card) === getRank(sortedHand[index - 1]) - 1);
  };

  const evaluateHand = (hand) => {
    if (isFlush(hand) && isStraight(hand)) {
      return { handRank: 8, hand };
    }
    // Add more hand evaluations here
  };

  const evaluatedHands = hands.map(hand => evaluateHand(hand));
  const bestRank = Math.max(...evaluatedHands.map(hand => hand.handRank));
  return evaluatedHands.filter(hand => hand.handRank === bestRank).map(hand => hand.hand);
};
