export const encode = (phrase, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encodedPhrase = "";

  // Validate key
  if (!isCoprime(key.a, alphabet.length)) {
    return "Error: a and m must be coprime.";
  }

  // Encode each character
  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i].toLowerCase();
    const charIndex = alphabet.indexOf(char);

    if (charIndex !== -1) {
      const encodedIndex = (key.a * charIndex + key.b) % alphabet.length;
      const encodedChar = alphabet[encodedIndex];
      encodedPhrase += encodedChar;
    } else {
      encodedPhrase += char;
    }
  }

  return encodedPhrase;
};

export const decode = (phrase, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let decodedPhrase = "";

  // Validate key
  if (!isCoprime(key.a, alphabet.length)) {
    return "Error: a and m must be coprime.";
  }

  // Decode each character
  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i].toLowerCase();
    const charIndex = alphabet.indexOf(char);

    if (charIndex !== -1) {
      const decodedIndex = modularMultiplicativeInverse(key.a, alphabet.length) * (charIndex - key.b);
      const decodedChar = alphabet[(decodedIndex % alphabet.length + alphabet.length) % alphabet.length];
      decodedPhrase += decodedChar;
    } else {
      decodedPhrase += char;
    }
  }

  return decodedPhrase;
};

// Helper function to check if two numbers are coprime
const isCoprime = (a, b) => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  return gcd(a, b) === 1;
};

// Helper function to calculate the modular multiplicative inverse
const modularMultiplicativeInverse = (a, m) => {
  const extendedEuclideanAlgorithm = (a, b) => {
    if (a === 0) {
      return { gcd: b, x: 0, y: 1 };
    }

    const { gcd, x: prevX, y: prevY } = extendedEuclideanAlgorithm(b % a, a);
    const x = prevY - Math.floor(b / a) * prevX;
    const y = prevX;

    return { gcd, x, y };
  };

  const { gcd, x } = extendedEuclideanAlgorithm(a, m);

  if (gcd !== 1) {
    throw new Error("Modular multiplicative inverse does not exist.");
  }

  return (x % m + m) % m;
};
};
