//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  constructor(key) {
    if (key && !/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
    this.key = key || this.generateRandomKey();
  }
  }

  encode(plainText) {
    let encoded = '';
    for (let i = 0; i < plainText.length; i++) {
      const charCode = (plainText.charCodeAt(i) - 97 + this.key.charCodeAt(i % this.key.length) - 97) % 26 + 97;
      encoded += String.fromCharCode(charCode);
    }
    return encoded;
  }
    throw new Error('Remove this statement and implement this function');
  }

  decode(encodedText) {
    let decoded = '';
    for (let i = 0; i < encodedText.length; i++) {
      const charCode = (encodedText.charCodeAt(i) - 97 - this.key.charCodeAt(i % this.key.length) + 97 + 26) % 26 + 97;
      decoded += String.fromCharCode(charCode);
    }
    return decoded;
  }
    throw new Error('Remove this statement and implement this function');
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
}
