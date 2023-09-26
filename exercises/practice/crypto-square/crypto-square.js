//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(plaintext) {
    this.plaintext = plaintext;
  }

  get ciphertext() {
    // normalize the plaintext
    const normalizedText = this.plaintext.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // calculate the size of the rectangle
    const length = normalizedText.length;
    const columns = Math.ceil(Math.sqrt(length));
    const rows = Math.ceil(length / columns);

    // create the rectangle
    const rectangle = [];
    for (let i = 0; i < rows; i++) {
      rectangle.push(normalizedText.slice(i * columns, (i + 1) * columns));
    }

    // transpose the rectangle
    const transposedRectangle = [];
    for (let i = 0; i < columns; i++) {
      let column = "";
      for (let j = 0; j < rows; j++) {
        if (rectangle[j][i]) {
          column += rectangle[j][i];
        }
      }
      transposedRectangle.push(column);
    }

    // join the columns with spaces
    const ciphertext = transposedRectangle.join(" ");

    return ciphertext;
  }
}
