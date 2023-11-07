//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(text) {
    this.normalizedText = this.normalizePlaintext(text);
  }

  normalizePlaintext(text) {
    return text.toLowerCase().replace(/[\W_]/g, '');
  }

  size() {
    let len = this.normalizedText.length;
    let c = Math.ceil(Math.sqrt(len));
    return { rows: Math.ceil(len / c), cols: c };
  }

  plaintextSegments() {
    let { rows, cols } = this.size();
    let segments = [];
    for (let i = 0; i < rows; i++) {
      segments.push(this.normalizedText.slice(i * cols, (i + 1) * cols));
    }
    return segments;
  }

  get ciphertext() {
    let { rows, cols } = this.size();
    let segments = this.plaintextSegments();
    let cipher = '';
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        cipher += segments[j].charAt(i) || ' ';
      }
      if (i < cols - 1) cipher += ' ';
    }
    return cipher.trim();
  }
}
