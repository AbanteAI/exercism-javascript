//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isValidChain = (chain) => {
  if (chain.length === 0) return true;
  return chain[0][0] === chain[chain.length - 1][1];
};

const findValidChain = (stones, chain = []) => {
  if (stones.length === 0) {
    return isValidChain(chain) ? chain : null;
  }

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    const remainingStones = stones.slice(0, i).concat(stones.slice(i + 1));
    const newChain = findValidChain(remainingStones, chain.concat([stone]));

    if (newChain) return newChain;

    const reversedStone = [stone[1], stone[0]];
    const reversedChain = findValidChain(remainingStones, chain.concat([reversedStone]));

    if (reversedChain) return reversedChain;
  }

  return null;
};
export const chain = (stones) => {
  return findValidChain(stones);
};
