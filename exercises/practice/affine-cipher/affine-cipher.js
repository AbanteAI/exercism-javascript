const modInverse = (a, m) => {
  for (let i = 1; i < m; i++) {
    if ((a * i) % m === 1) {
      return i;
    }
  }
  return -1;
};

const areCoprime = (a, m) => {
  while (m !== 0) {
    let temp = m;
    m = a % m;
    a = temp;
  }
  return a === 1;
};

export const encode = (phrase, key) => {
  const { a, b } = key;
  const m = 26;
  if (!areCoprime(a, m)) {
    return "Error: a and m must be coprime.";
  }
  return phrase
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      const x = char.charCodeAt(0) - 97;
      const y = (a * x + b) % m;
      return String.fromCharCode(y + 97);
    });
};

export const decode = (phrase, key) => {
  const { a, b } = key;
  const m = 26;
  if (!areCoprime(a, m)) {
    return "Error: a and m must be coprime.";
  }
  const aInverse = modInverse(a, m);
  return phrase
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      const y = char.charCodeAt(0) - 97;
      const x = (aInverse * (y - b + m)) % m;
      return String.fromCharCode(x + 97);
    });
};