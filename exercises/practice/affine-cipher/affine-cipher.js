export const encode = (phrase, keyA, keyB) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const m = alphabet.length;

  const isCoprime = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a === 1;
  };

  if (!isCoprime(keyA, m)) {
    return "Error: a and m must be coprime.";
  }

  const encodeChar = (char) => {
    const index = alphabet.indexOf(char);
    const encodedIndex = (keyA * index + keyB) % m;
    return alphabet[encodedIndex];
  };

  const cleanPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");
  const encoded = cleanPhrase
    .split("")
    .map((char, index) => {
      const encodedChar = encodeChar(char);
      return index > 0 && index % 5 === 0 ? ` ${encodedChar}` : encodedChar;
    })
    .join("");

  return encoded;
};
};

export const decode = (phrase, keyA, keyB) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const m = alphabet.length;

  const isCoprime = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a === 1;
  };

  if (!isCoprime(keyA, m)) {
    return "Error: a and m must be coprime.";
  }

  const decodeChar = (char) => {
    const index = alphabet.indexOf(char);
    const modularMultiplicativeInverse = (function () {
      for (let i = 1; i < m; i++) {
        if ((keyA * i) % m === 1) {
          return i;
        }
      }
    })();
    const decodedIndex = (modularMultiplicativeInverse * (index - keyB + m)) % m;
    return alphabet[decodedIndex];
  };

  const cleanPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");
  const decoded = cleanPhrase
    .split("")
    .map((char) => decodeChar(char))
    .join("");

  return decoded;
};
};
