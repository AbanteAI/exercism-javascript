//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba";

  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  let encodedText = "";
  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const index = alphabet.indexOf(char);
    encodedText += index >= 0 ? reverseAlphabet[index] : char;
    if ((i + 1) % 5 === 0 && i !== cleanText.length - 1) {
      encodedText += " ";
    }
  }

  return encodedText;
};
};

export const decode = (text) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba";

  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  let decodedText = "";
  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const index = reverseAlphabet.indexOf(char);
    decodedText += index >= 0 ? alphabet[index] : char;
  }

  return decodedText;
};
};
