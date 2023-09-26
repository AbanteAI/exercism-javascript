//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(message) {
    this.normalizedMessage = message
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }
  getDimensions() {
    const length = this.normalizedMessage.length;
    const sqrt = Math.sqrt(length);
    const r = Math.floor(sqrt);
    const c = Math.ceil(sqrt);

    return r * c >= length ? [r, c] : [c, c];
  }

  get ciphertext() {
    const [r, c] = this.getDimensions();
    let result = '';

    for (let i = 0; i < c; i++) {
      for (let j = 0; j < r; j++) {
        const index = j * c + i;
        result += this.normalizedMessage[index] || ' ';
      }
      if (i < c - 1) {
        result += ' ';
      }
    }

    return result;
  }
}
