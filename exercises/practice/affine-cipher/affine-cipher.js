export const encode = (phrase, key) => {
  const a = key.a;
  const b = key.b;
  const m = 26;
  if (gcd(a, m) !== 1) {
    throw new Error('a and m must be coprime');
  }
  return phrase
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      const x = char.charCodeAt(0) - 97;
      const y = (a * x + b) % m;
      return String.fromCharCode(y + 97);
    })
    .replace(/(.{5})/g, '$1 ')
    .trim();
};

export const decode = (phrase, key) => {
  const a = key.a;
  const b = key.b;
  const m = 26;
  if (gcd(a, m) !== 1) {
    throw new Error('a and m must be coprime');
  }
  const aInverse = modInverse(a, m);
  return phrase
    .replace(/[^a-z0-9]/g, '')
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      const y = char.charCodeAt(0) - 97;
      const x = (aInverse * (y - b + m)) % m;
      return String.fromCharCode(x + 97);
    });
};

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function modInverse(a, m) {
  for (let i = 1; i < m; i++) {
    if ((a * i) % m === 1) {
      return i;
    }
  }
  throw new Error(`No modular inverse for ${a} mod ${m}`);
}
};

