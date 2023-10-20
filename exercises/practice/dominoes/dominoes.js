//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const canAddDomino = (domino, chain) => {
  if (chain.length === 0) return true;
  const lastDomino = chain[chain.length - 1];
  return lastDomino[1] === domino[0] || lastDomino[1] === domino[1];
};

const buildChain = (dominoes, chain = []) => {
  if (dominoes.length === 0) {
    return chain[0][0] === chain[chain.length - 1][1] ? chain : null;
  }

  for (let i = 0; i < dominoes.length; i++) {
    const domino = dominoes[i];
    if (canAddDomino(domino, chain)) {
      const remainingDominoes = dominoes.slice(0, i).concat(dominoes.slice(i + 1));
      const newChain = buildChain(remainingDominoes, chain.concat([domino]));
      if (newChain) return newChain;
    }
    if (domino[0] !== domino[1] && canAddDomino([domino[1], domino[0]], chain)) {
      const remainingDominoes = dominoes.slice(0, i).concat(dominoes.slice(i + 1));
      const newChain = buildChain(remainingDominoes, chain.concat([[domino[1], domino[0]]]));
      if (newChain) return newChain;
    }
  }

  return null;
};

export const chain = (dominoes) => {
  return buildChain(dominoes);
};
  throw new Error('Remove this statement and implement this function');
};
