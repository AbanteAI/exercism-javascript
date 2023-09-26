//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if (key && !/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
    this.key = key || this.generateRandomKey();
  }

  encode(plaintext) {
    return this.transform(plaintext, this.shiftChar.bind(this));
  }

  decode(ciphertext) {
    return this.transform(ciphertext, this.unShiftChar.bind(this));
  }

  transform(text, transformChar) {
    return [...text].map((char, i) => transformChar(char, i)).join('');
  }

  shiftChar(char, i) {
    const charCode = char.charCodeAt(0);
    const shift = this.key.charCodeAt(i % this.key.length) - 97;
    const shiftedCode = ((charCode - 97 + shift) % 26) + 97;
    return String.fromCharCode(shiftedCode);
  }

  unShiftChar(char, i) {
    const charCode = char.charCodeAt(0);
    const shift = this.key.charCodeAt(i % this.key.length) - 97;
    const shiftedCode = ((charCode - 97 - shift + 26) % 26) + 97;
    return String.fromCharCode(shiftedCode);
  }

  generateRandomKey() {
    let key = '';
    for (let i = 0; i < 100; i++) {
      key += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    return key;
  }
}
