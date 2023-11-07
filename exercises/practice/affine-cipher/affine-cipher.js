const ALPHABET_SIZE = 26;

const modInverse = (a, m) => {
  for (let n = 1; n < m; n++) {
    if ((a * n) % m === 1) return n;
  }
  return null;
};

const areCoprime = (a, m) => {
  const min = Math.min(a, m);
  for (let i = 2; i <= min; i++) {
    if (a % i === 0 && m % i === 0) return false;
  }
  return true;
};

const encodeChar = (char, a, b) => {
  const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
  return String.fromCharCode(((a * charCode + b) % ALPHABET_SIZE) + 'a'.charCodeAt(0));
};

const decodeChar = (char, aInverse, b) => {
  const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
  return String.fromCharCode(((aInverse * (charCode - b + ALPHABET_SIZE)) % ALPHABET_SIZE) + 'a'.charCodeAt(0));
};

export const encode = (phrase, a, b) => {
  if (!areCoprime(a, ALPHABET_SIZE)) {
    throw new Error('Error: a and m must be coprime.');
  }
  return phrase
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map(char => encodeChar(char, a, b))
    .join('');
};
};

export const decode = (phrase, a, b) => {
  if (!areCoprime(a, ALPHABET_SIZE)) {
    throw new Error('Error: a and m must be coprime.');
  }
  const aInverse = modInverse(a, ALPHABET_SIZE);
  if (aInverse === null) {
    throw new Error('Error: a inverse does not exist.');
  }
  return phrase
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map(char => decodeChar(char, aInverse, b))
    .join('');
};
};
