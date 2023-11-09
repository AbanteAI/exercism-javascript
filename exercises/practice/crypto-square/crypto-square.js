//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(inputText) {
    this.inputText = inputText;
  }
  }
  }
  normalize() {
    return this.inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }

  rectangleSize() {
    const length = this.normalize().length;
    const c = Math.ceil(Math.sqrt(length));
    const r = Math.ceil(length / c);
    return { r, c };
  }
  encode() {
    const normalizedText = this.normalize();
    const { r, c } = this.rectangleSize();
    let encodedText = "";

    for (let i = 0; i < c; i++) {
      for (let j = 0; j < r; j++) {
        const index = j * c + i;
        encodedText += index < normalizedText.length ? normalizedText[index] : " ";
      }
      if (i < c - 1) {
        encodedText += " ";
      }
    }

    return encodedText;
  }
  get ciphertext() {
    return this.encode();
  }
}
