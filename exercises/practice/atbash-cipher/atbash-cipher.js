//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipher = "zyxwvutsrqponmlkjihgfedcba";
  let encodedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const index = alphabet.indexOf(char);

    if (index >= 0) {
      const encodedChar = cipher[index];
      encodedText += encodedChar;
    }
  }

  return encodedText;
};

export const decode = (text) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const cipher = "zyxwvutsrqponmlkjihgfedcba";
  let decodedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const index = cipher.indexOf(char);

    if (index >= 0) {
      const decodedChar = alphabet[index];
      decodedText += decodedChar;
    }
  }

  return decodedText;
};
