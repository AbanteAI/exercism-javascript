//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  const isValidChain = (chain) => {
    for (let i = 0; i < chain.length - 1; i++) {
      const [left, right] = chain[i];
      const [nextLeft, nextRight] = chain[i + 1];
      if (right !== nextLeft) {
        return false;
      }
    }
    return true;
  };

  const backtrack = (remaining, currentChain) => {
    if (remaining.length === 0) {
      return currentChain;
    }

    for (let i = 0; i < remaining.length; i++) {
      const domino = remaining[i];
      const [left, right] = domino;

      if (left === currentChain[currentChain.length - 1][1]) {
        const newChain = [...currentChain, domino];
        const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
        const result = backtrack(newRemaining, newChain);
        if (result) {
          return result;
        }
      } else if (right === currentChain[0][0]) {
        const newChain = [domino, ...currentChain];
        const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
        const result = backtrack(newRemaining, newChain);
        if (result) {
          return result;
        }
      }
    }

    return null;
  };

  const sortedDominoes = dominoes.sort((a, b) => a[0] - b[0]);
  const result = backtrack(sortedDominoes, [sortedDominoes[0]]);
  return result && isValidChain(result) ? result : null;
};
