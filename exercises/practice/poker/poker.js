//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const bestHands = (hands) => {
  // If there is only one hand, it is by default the best hand
  if (hands.length === 1) {
    return hands;
  }
  
  // Placeholder for future implementation that will compare multiple hands
  // and determine the best one(s) according to poker rules
  // For now, simply return the first hand as a placeholder
  return [hands[0]];
};
