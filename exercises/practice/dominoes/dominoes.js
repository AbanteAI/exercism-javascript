//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  if (dominoes.length === 0) {
    return [];
  }

  const result = [];

  const dfs = (current, remaining) => {
    if (remaining.length === 0) {
      if (current[0] === current[current.length - 1]) {
        result.push(current);
      }
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = remaining[i];
      if (current[current.length - 1][1] === next[0]) {
        dfs([...current, next], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
      }
      if (current[current.length - 1][1] === next[1]) {
        dfs([...current, [next[1], next[0]]], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
      }
    }
  };

  dfs([dominoes[0]], dominoes.slice(1));
  return result;
};
