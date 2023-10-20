//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(text) {
    this.normalizedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  }

  get ciphertext() {
    const length = this.normalizedText.length;
    const c = Math.ceil(Math.sqrt(length));
    const r = Math.ceil(length / c);

    let encodedText = '';

    for (let i = 0; i < c; i++) {
      for (let j = 0; j < r; j++) {
        const charIndex = j * c + i;
        encodedText += charIndex < length ? this.normalizedText[charIndex] : ' ';
      }
      if (i < c - 1) {
        encodedText += ' ';
      }
    }

    return encodedText;
  }
}
