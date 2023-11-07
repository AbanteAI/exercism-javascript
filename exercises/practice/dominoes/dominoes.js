//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  if (dominoes.length === 0) return [];

  const isValidChain = (chain) => {
    for (let i = 1; i < chain.length; i++) {
      if (chain[i - 1][1] !== chain[i][0]) return false;
    }
    return chain[0][0] === chain[chain.length - 1][1];
  };

  const tryChain = (remainingDominoes, currentChain) => {
    if (remainingDominoes.length === 0 && isValidChain(currentChain)) {
      return currentChain;
    }
    for (let i = 0; i < remainingDominoes.length; i++) {
      const nextDomino = remainingDominoes[i];
      const nextChain = currentChain.concat([nextDomino]);
      if (currentChain.length === 0 || currentChain[currentChain.length - 1][1] === nextDomino[0]) {
        const remainingAfterNext = remainingDominoes.slice(0, i).concat(remainingDominoes.slice(i + 1));
        const result = tryChain(remainingAfterNext, nextChain);
        if (result) return result;
      }
      if (nextDomino[0] !== nextDomino[1] && (currentChain.length === 0 || currentChain[currentChain.length - 1][1] === nextDomino[1])) {
        const flippedDomino = [nextDomino[1], nextDomino[0]];
        const nextChainFlipped = currentChain.concat([flippedDomino]);
        const remainingAfterNextFlipped = remainingDominoes.slice(0, i).concat(remainingDominoes.slice(i + 1));
        const resultFlipped = tryChain(remainingAfterNextFlipped, nextChainFlipped);
        if (resultFlipped) return resultFlipped;
      }
    }
    return null;
  };

  return tryChain(dominoes, []);
};
