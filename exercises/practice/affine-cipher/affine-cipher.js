export const encode = (phrase, key) => {
  const { a, b } = key;
  if (!isCoprime(a, 26)) {
    return "Error: a and m must be coprime.";
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encodedPhrase = phrase
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/[0-9]/g, "")
    .split("")
    .map((char) => {
      const x = alphabet.indexOf(char);
      const y = (a * x + b) % 26;
      return alphabet[y];
    });

  return splitIntoGroups(encodedPhrase.join(""), 5).join(" ");
};

export const decode = (phrase, key) => {
  const { a, b } = key;
  if (!isCoprime(a, 26)) {
    return "Error: a and m must be coprime.";
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const decodedPhrase = phrase
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/[0-9]/g, "")
    .split("")
    .map((char) => {
      const y = alphabet.indexOf(char);
      const x = modInverse(a, 26) * (y - b + 26) % 26;
      return alphabet[x];
    });

  return decodedPhrase.join("");
};

const isCoprime = (a, b) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return gcd(a, b) === 1;
};

const modInverse = (a, m) => {
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return null;
};

const splitIntoGroups = (phrase, groupSize) => {
  const groups = [];
  for (let i = 0; i < phrase.length; i += groupSize) {
    groups.push(phrase.slice(i, i + groupSize));
  }
  return groups;
};
};
export const encode = (phrase, key) => {
  const { a, b } = key;
  if (!isCoprime(a, 26)) {
    return "Error: a and m must be coprime.";
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encodedPhrase = phrase
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/[0-9]/g, "")
    .split("")
    .map((char) => {
      const x = alphabet.indexOf(char);
      const y = (a * x + b) % 26;
      return alphabet[y];
    });

  return splitIntoGroups(encodedPhrase.join(""), 5).join(" ");
};

export const decode = (phrase, key) => {
  const { a, b } = key;
  if (!isCoprime(a, 26)) {
    return "Error: a and m must be coprime.";
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const decodedPhrase = phrase
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/[0-9]/g, "")
    .split("")
    .map((char) => {
      const y = alphabet.indexOf(char);
      const x = modInverse(a, 26) * (y - b + 26) % 26;
      return alphabet[x];
    });

  return decodedPhrase.join("");
};

const isCoprime = (a, b) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return gcd(a, b) === 1;
};

const modInverse = (a, m) => {
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return null;
};

const splitIntoGroups = (phrase, groupSize) => {
  const groups = [];
  for (let i = 0; i < phrase.length; i += groupSize) {
    groups.push(phrase.slice(i, i + groupSize));
  }
  return groups;
};
