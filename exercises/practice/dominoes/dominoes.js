//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  if (dominoes.length === 0) {
    return [];
  }

  const result = [];

  const dfs = (curr, remaining) => {
    if (remaining.length === 0) {
      if (curr[0] === curr[curr.length - 1]) {
        result.push([...curr]);
      }
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = remaining[i];
      if (curr[curr.length - 1][1] === next[0]) {
        curr.push(next);
        dfs(curr, remaining.filter((_, index) => index !== i));
        curr.pop();
      } else if (curr[curr.length - 1][1] === next[1]) {
        curr.push([next[1], next[0]]);
        dfs(curr, remaining.filter((_, index) => index !== i));
        curr.pop();
      }
    }
  };

  dfs([dominoes[0]], dominoes.slice(1));

  return result.length > 0 ? result[0] : null;
};
