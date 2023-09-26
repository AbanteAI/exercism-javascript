//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(input) {
    this.normalizedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }

  get ciphertext() {
    const cols = Math.ceil(Math.sqrt(this.normalizedInput.length));
    let encodedText = "";
    for (let i = 0; i < cols; i++) {
      for (let j = i; j < this.normalizedInput.length; j += cols) {
        encodedText += this.normalizedInput[j];
      }
      if (i < cols - 1) {
        encodedText += " ";
      }
    }
    return encodedText;
  }
}

  get ciphertext() {
    throw new Error('Remove this statement and implement this function');
  }
}
