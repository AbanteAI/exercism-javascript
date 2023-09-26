//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const bestHands = (hands) => {
  // Helper function to check if a hand is a straight
  const isStraight = (hand) => {
    const sortedValues = hand.map((card) => card.value).sort((a, b) => a - b);
    return sortedValues.every((value, index) => value === sortedValues[0] + index);
  };

  // Helper function to check if a hand is a flush
  const isFlush = (hand) => {
    const suits = hand.map((card) => card.suit);
    return suits.every((suit) => suit === suits[0]);
  };

  // Helper function to check if a hand is a straight flush
  const isStraightFlush = (hand) => isStraight(hand) && isFlush(hand);

  // Helper function to check if a hand is a four of a kind
  const isFourOfAKind = (hand) => {
    const valueCounts = {};
    hand.forEach((card) => {
      valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
    });
    return Object.values(valueCounts).some((count) => count === 4);
  };

  // Helper function to check if a hand is a full house
  const isFullHouse = (hand) => {
    const valueCounts = {};
    hand.forEach((card) => {
      valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
    });
    const counts = Object.values(valueCounts);
    return counts.includes(3) && counts.includes(2);
  };

  // Helper function to check if a hand is a three of a kind
  const isThreeOfAKind = (hand) => {
    const valueCounts = {};
    hand.forEach((card) => {
      valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
    });
    return Object.values(valueCounts).some((count) => count === 3);
  };

  // Helper function to check if a hand is a two pair
  const isTwoPair = (hand) => {
    const valueCounts = {};
    hand.forEach((card) => {
      valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
    });
    const counts = Object.values(valueCounts);
    return counts.filter((count) => count === 2).length === 2;
  };

  // Helper function to check if a hand is a one pair
  const isOnePair = (hand) => {
    const valueCounts = {};
    hand.forEach((card) => {
      valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
    });
    return Object.values(valueCounts).some((count) => count === 2);
  };

  // Helper function to get the highest card value in a hand
  const getHighestCardValue = (hand) => {
    const sortedValues = hand.map((card) => card.value).sort((a, b) => a - b);
    return sortedValues[sortedValues.length - 1];
  };

  // Helper function to compare two hands and determine the winner
  const compareHands = (hand1, hand2) => {
    const hand1Type = getHandType(hand1);
    const hand2Type = getHandType(hand2);

    if (hand1Type.priority !== hand2Type.priority) {
      return hand1Type.priority - hand2Type.priority;
    }

    switch (hand1Type.priority) {
      case 0: // High card
        const hand1HighestValue = getHighestCardValue(hand1);
        const hand2HighestValue = getHighestCardValue(hand2);
        return hand1HighestValue - hand2HighestValue;
      case 1: // One pair
        const hand1PairValue = getPairValue(hand1);
        const hand2PairValue = getPairValue(hand2);
        if (hand1PairValue !== hand2PairValue) {
          return hand1PairValue - hand2PairValue;
        }
        return compareHands(getRemainingCards(hand1, hand1PairValue), getRemainingCards(hand2, hand2PairValue));
      // Implement the remaining cases for other hand types
      // ...
      default:
        return 0;
    }
  };

  // Helper function to determine the type of a hand
  const getHandType = (hand) => {
    if (isStraightFlush(hand)) {
      return { type: 'straight flush', priority: 8 };
    }
    if (isFourOfAKind(hand)) {
      return { type: 'four of a kind', priority: 7 };
    }
    if (isFullHouse(hand)) {
      return { type: 'full house', priority: 6 };
    }
    if (isFlush(hand)) {
      return { type: 'flush', priority: 5 };
    }
    if (isStraight(hand)) {
      return { type: 'straight', priority: 4 };
    }
    if (isThreeOfAKind(hand)) {
      return { type: 'three of a kind', priority: 3 };
    }
    if (isTwoPair(hand)) {
      return { type: 'two pair', priority: 2 };
    }
    if (isOnePair(hand)) {
      return { type: 'one pair', priority: 1 };
    }
    return { type: 'high card', priority: 0 };
  };

  // Helper function to get the value of the pair in a one pair hand
  const getPairValue = (hand) => {
    const valueCounts = {};
    hand.forEach((card) => {
      valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
    });
    return Object.entries(valueCounts).find(([value, count]) => count === 2)[0];
  };

  // Helper function to get the remaining cards in a one pair hand
  const getRemainingCards = (hand, pairValue) => {
    return hand.filter((card) => card.value !== pairValue);
  };

  // Main logic to determine the best hand(s)
  const bestHand = hands.reduce((best, current) => {
    const comparison = compareHands(best, current);
    if (comparison < 0) {
      return current;
    } else if (comparison === 0) {
      return [...best, current];
    } else {
      return best;
    }
  }, hands[0]);

  return bestHand;
};
