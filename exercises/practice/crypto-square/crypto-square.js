//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(text) {
    this.text = text;
  }

  get ciphertext() {
    const normalizedText = this.text.replace(/[^a-z0-9]/g, "").toLowerCase();
    const length = normalizedText.length;
    const columns = Math.ceil(Math.sqrt(length));
    const rows = Math.ceil(length / columns);
    let result = "";

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const index = j * columns + i;
        if (index < length) {
          result += normalizedText[index];
        } else {
          result += " ";
        }
      }
      if (i < columns - 1) {
        result += " ";
      }
    }

    return result;
  }
}
