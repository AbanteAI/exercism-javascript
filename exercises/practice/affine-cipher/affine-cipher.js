export const encode = (phrase, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const m = alphabet.length;
  const [a, b] = key;

  if (gcd(a, m) !== 1) {
    throw new Error('a and m must be coprime.');
  }

  return phrase
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      const x = alphabet.indexOf(char);
      const y = (a * x + b) % m;
      return alphabet[y];
    });
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};
};

export const decode = (phrase, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const m = alphabet.length;
  const [a, b] = key;

  if (gcd(a, m) !== 1) {
    throw new Error('a and m must be coprime.');
  }

  const aInv = modInverse(a, m);

  return phrase
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      const y = alphabet.indexOf(char);
      const x = (aInv * (y - b + m)) % m;
      return alphabet[x];
    });
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const modInverse = (a, m) => {
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return 1;
};
};
