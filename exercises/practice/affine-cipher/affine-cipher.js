export const encode = (phrase, key) => {
  const { a, b } = key;
  const m = 26;
  if (!areCoprime(a, m)) {
    throw new Error("Error: a and m must be coprime.");
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encoded = phrase
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(char => {
      const x = alphabet.indexOf(char);
      const y = (a * x + b) % m;
      return alphabet[y];
    })
    .join("");

  return encoded;
};
  if (!areCoprime(a, m)) {
export const decode = (phrase, key) => {
  const { a, b } = key;
  const m = 26;
  if (!areCoprime(a, m)) {
    throw new Error("Error: a and m must be coprime.");
  }

  const aInverse = findMMI(a, m);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const decoded = phrase
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(char => {
      const y = alphabet.indexOf(char);
      const x = (aInverse * (y - b)) % m;
      return alphabet[(x + m) % m];
    })
    .join("");

  return decoded;
};
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encoded = phrase
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(char => {
      const x = alphabet.indexOf(char);
      const y = (a * x + b) % m;
      return alphabet[y];
    })
    .join("");

  return { status: 0, message: encoded };
};

export const decode = (phrase, key) => {
  const { a, b } = key;
  const m = 26;
  if (!areCoprime(a, m)) {
    return { status: 1, message: "Error: a and m must be coprime." };
  }

  const aInverse = findMMI(a, m);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const decoded = phrase
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(char => {
      const y = alphabet.indexOf(char);
      const x = (aInverse * (y - b)) % m;
      return alphabet[(x + m) % m];
    })
    .join("");

  return { status: 0, message: decoded };
};

const areCoprime = (a, m) => {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return gcd(a, m) === 1;
};

const findMMI = (a, m) => {
  for (let n = 1; n < m; n++) {
    if ((a * n) % m === 1) {
      return n;
    }
  }
  return null;
};