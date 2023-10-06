//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(message) {
    this.message = message;
  }

  get ciphertext() {
    const normalizedMessage = this.message.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const messageLength = normalizedMessage.length;
    const columns = Math.ceil(Math.sqrt(messageLength));
    const rows = Math.ceil(messageLength / columns);
    let result = '';

    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        const index = c + r * columns;
        result += normalizedMessage[index] || ' ';
      }
      result += ' ';
    }

    return result.trim();
  }

  get ciphertext() {
    throw new Error('Remove this statement and implement this function');
  }
}
