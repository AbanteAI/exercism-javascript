//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(plaintext) {
    this.plaintext = plaintext;
  }

  normalizePlaintext() {
    return this.plaintext.replace(/[\W]/g, '').toLowerCase();
  }

  size() {
    const normalized = this.normalizePlaintext();
    const length = normalized.length;
    const columns = Math.ceil(Math.sqrt(length));
    const rows = Math.ceil(length / columns);
    return { columns, rows };
  }

  plaintextSegments() {
    const normalized = this.normalizePlaintext();
    const { columns, rows } = this.size();
    const segments = [];
    for (let i = 0; i < rows; i++) {
      segments.push(normalized.slice(i * columns, (i + 1) * columns));
    }
    return segments;
  }

  ciphertext() {
    const segments = this.plaintextSegments();
    const { columns } = this.size();
    let encrypted = '';
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < segments.length; j++) {
        if (segments[j][i]) {
          encrypted += segments[j][i];
        }
      }
      encrypted += ' ';
    }
    return encrypted.trim();
  }
}
