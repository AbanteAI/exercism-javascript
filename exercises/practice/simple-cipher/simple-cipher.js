//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if (key && !/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
    this._key = key || this.generateRandomKey();
  }

  encode(plainText) {
    return this.transformText(plainText, 'encode');
  }

  decode(cipherText) {
    return this.transformText(cipherText, 'decode');
  }

  get key() {
    return this._key;
  }

  generateRandomKey() {
    let key = '';
    for (let i = 0; i < 100; i++) {
      key += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    return key;
  }

  transformText(text, operation) {
    const keyLength = this._key.length;
    const transformedText = [];
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) - 97;
      const keyCharCode = this._key.charCodeAt(i % keyLength) - 97;
      let transformedCharCode;
      if (operation === 'encode') {
        transformedCharCode = (charCode + keyCharCode) % 26;
      } else {
        transformedCharCode = (charCode - keyCharCode + 26) % 26;
      }
      transformedText.push(String.fromCharCode(transformedCharCode + 97));
    }
    return transformedText.join('');
  }
}
