//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = generateRandomKey()) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error("Key must only contain lowercase letters");
    }
    this.key = key;
  }

encode(plaintext) {
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
        const plaintextChar = plaintext[i];
        const keyChar = this.key[i % this.key.length];
        const shiftedChar = shiftCharacter(plaintextChar, keyChar);
        ciphertext += shiftedChar;
    }
    return ciphertext;
}

decode(ciphertext) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        const ciphertextChar = ciphertext[i];
        const keyChar = this.key[i % this.key.length];
        const shiftedChar = shiftCharacter(ciphertextChar, -keyChar);
        plaintext += shiftedChar;
    }
    return plaintext
  }

  get key() {
    return this._key;
  }

  set key(value) {
    this._key = value;
  }
}

function shiftCharacter(char, shift) {
  const charCode = char.charCodeAt(0) - 97;
  const shiftedCharCode = (charCode + shift + 26) % 26;
  return String.fromCharCode(shiftedCharCode + 97);
}

function generateRandomKey() {
  let key = "";
  for (let i = 0; i < 100; i++) {
    const randomCharCode = Math.floor(Math.random() * 26) + 97;
    const randomChar = String.fromCharCode(randomCharCode);
    key += randomChar;
  }
  return key;
}
