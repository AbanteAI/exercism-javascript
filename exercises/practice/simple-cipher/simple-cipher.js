//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  #_key;

  constructor(key) {
    if (key === undefined) {
      this.#_key = this.generateRandomKey();
    } else {
      this.#_key = key;
    }
  }
  }

  generateRandomKey() {
    let key = "";
    for (let i = 0; i < 100; i++) {
      key += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    return key;
  }

  encode(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const shiftAmount = this.#_key.charCodeAt(i % this.#_key.length) - 97;
      output += encodedChar;
    }
    return output;
  }

  decode(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const shiftAmount = this.#_key.charCodeAt(i % this.#_key.length) - 97;
      output += decodedChar;
    }
    return output;
  }

  get key() {
    return this.#_key;
  }
}
