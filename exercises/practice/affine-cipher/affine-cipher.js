export const encode = (phrase, key) => {
  const { a, b } = key;
  if (gcd(a, 26) !== 1) {
    throw new Error('Error: a and m must be coprime.');
  }
  return phrase
    .replace(/\W/g, '')
    .toUpperCase()
    .replace(/[A-Z]/g, (char) => {
      const x = char.charCodeAt(0) - 65;
      const encoded = (a * x + b) % 26;
      return String.fromCharCode(encoded + 65);
    })
    .toLowerCase();
};
};

export const decode = (phrase, key) => {
  const { a, b } = key;
  if (gcd(a, 26) !== 1) {
    throw new Error('Error: a and m must be coprime.');
  }
  const aInverse = modInverse(a, 26);
  return phrase
    .toUpperCase()
    .replace(/[A-Z]/g, (char) => {
      const y = char.charCodeAt(0) - 65;
      const decoded = (aInverse * (y - b + 26)) % 26;
      return String.fromCharCode(decoded + 65);
    })
    .toLowerCase()
    .replace(/ /g, '');
};
};
const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

const modInverse = (a, m) => {
  a = a % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return 1;
};
