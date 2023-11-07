//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

module.exports.Cipher = class Cipher {
  constructor(key) {
    if (key === undefined) {
      this._key = generateRandomKey();
    } else if (!key.match(/^[a-z]+$/)) {
      throw new Error('Bad key');
    } else {
      this._key = key;
    }
  }

  encode(input) {
    return input.split('').map((char, index) => {
      const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
      const keyCharCode = this._key[index % this._key.length].charCodeAt(0) - 'a'.charCodeAt(0);
      return String.fromCharCode(((charCode + keyCharCode) % 26) + 'a'.charCodeAt(0));
    }).join('');
  }

  decode(encoded) {
    return encoded.split('').map((char, index) => {
      const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
      const keyCharCode = this._key[index % this._key.length].charCodeAt(0) - 'a'.charCodeAt(0);
      return String.fromCharCode(((charCode - keyCharCode + 26) % 26) + 'a'.charCodeAt(0));
    }).join('');
  }

  get key() {
    return this._key;
  }
}
function generateRandomKey() {
  const keyLength = 100;
  const aCharCode = 'a'.charCodeAt(0);
  let key = '';
  for (let i = 0; i < keyLength; i++) {
    const randomCharCode = aCharCode + Math.floor(Math.random() * 26);
    key += String.fromCharCode(randomCharCode);
  }
  return key;
}
