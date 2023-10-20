//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if (key === undefined) {
      this._key = this.generateRandomKey();
    } else {
      this._key = key;
    }
  }
  generateRandomKey() {
    const keyLength = 100;
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < keyLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  encode(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      const keyCharCode = this._key.charCodeAt(i % this._key.length);
      result += String.fromCharCode(((charCode - 97 + keyCharCode - 97) % 26) + 97);
    }
    return result;
  }

  decode(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      const keyCharCode = this._key.charCodeAt(i % this._key.length);
      result += String.fromCharCode(((charCode - 97 - (keyCharCode - 97) + 26) % 26) + 97);
    }
    return result;
  }

  get key() {
    return this._key;
  }
}
