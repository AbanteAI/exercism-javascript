//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = generateRandomKey()) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error('Invalid key. Key must contain only lowercase letters.');
    }
    this.key = key;
  }

  encode(plaintext) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      const plaintextCharCode = plaintext.charCodeAt(i) - 97;
      const keyCharCode = this.key.charCodeAt(i % this.key.length) - 97;
      const encodedCharCode = (plaintextCharCode + keyCharCode) % 26 + 97;
      ciphertext += String.fromCharCode(encodedCharCode);
    }
    return ciphertext;
  }

  decode(ciphertext) {
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
      const ciphertextCharCode = ciphertext.charCodeAt(i) - 97;
      const keyCharCode = this.key.charCodeAt(i % this.key.length) - 97;
      const decodedCharCode = (ciphertextCharCode - keyCharCode + 26) % 26 + 97;
      plaintext += String.fromCharCode(decodedCharCode);
    }
    return plaintext;
  }

  get key() {
    return this._key;
  }

  set key(key) {
    this._key = key;
  }
}

function generateRandomKey() {
  let key = '';
  for (let i = 0; i < 100; i++) {
    const randomCharCode = Math.floor(Math.random() * 26) + 97;
    key += String.fromCharCode(randomCharCode);
  }
  return key;
}
