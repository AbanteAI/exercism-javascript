//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const chain = () => {
const canChain = (dominoes) => {
  const counts = new Map();
  for (const [a, b] of dominoes) {
    counts.set(a, (counts.get(a) || 0) + 1);
    counts.set(b, (counts.get(b) || 0) + 1);
  }
  return Array.from(counts.values()).filter((count) => count % 2 === 1).length <= 2;
};

const findChain = (dominoes, chain) => {
  if (dominoes.length === 0) {
    return chain[0][0] === chain[chain.length - 1][1] ? chain : null;
  }
  for (const domino of dominoes) {
    const newDominoes = dominoes.filter((d) => d !== domino);
    for (const flipped of [domino, domino.slice().reverse()]) {
      const newChain = findChain(newDominoes, chain.concat([flipped]));
      if (newChain) return newChain;
    }
  }
  return null;
};

  if (!canChain(dominoes)) return null;
  return findChain(dominoes, []);
};
export { chain };
  throw new Error('Remove this statement and implement this function');
};
