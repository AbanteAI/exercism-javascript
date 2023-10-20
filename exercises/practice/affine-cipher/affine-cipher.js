import { findModularMultiplicativeInverse } from 'math';
import { gcd } from 'math';
export const encode = (phrase, key) => {
  const { a, b } = key;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const m = alphabet.length;
  let encodedPhrase = '';

  if (gcd(a, m) !== 1) {
    return 'Error: a and m must be coprime.';
  }

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i].toLowerCase();
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      const encodedIndex = (a * index + b) % m;
      const encodedChar = alphabet[encodedIndex];
      encodedPhrase += encodedChar;
    } else {
      encodedPhrase += char;
    }
  }

  return encodedPhrase;
};

export const decode = (phrase, key) => {
  const { a, b } = key;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const m = alphabet.length;
  let decodedPhrase = '';

  if (gcd(a, m) !== 1) {
    return 'Error: a and m must be coprime.';
  }

  const aInverse = findModularMultiplicativeInverse(a, m);

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i].toLowerCase();
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      const decodedIndex = (aInverse * (index - b + m)) % m;
      const decodedChar = alphabet[decodedIndex];
      decodedPhrase += decodedChar;
    } else {
      decodedPhrase += char;
    }
  }

  return decodedPhrase;
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const findModularMultiplicativeInverse = (a, m) => {
  for (let i = 1; i < m; i++) {
    if ((a * i) % m === 1) {
      return i;
    }
  }

  return -1;
};
};
