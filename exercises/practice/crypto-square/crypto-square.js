//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(text) {
    this.normalizedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    this.columns = Math.ceil(Math.sqrt(this.normalizedText.length));
  }

  get ciphertext() {
    let result = "";
    for (let i = 0; i < this.columns; i++) {
      for (let j = i; j < this.normalizedText.length; j += this.columns) {
        result += this.normalizedText.charAt(j);
      }
      result += " ";
    }
    return result.trim();
  }
}
