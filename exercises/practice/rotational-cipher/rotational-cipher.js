//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let rotatedChar;

    if (char >= "A" && char <= "Z") {
      rotatedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
    } else if (char >= "a" && char <= "z") {
      rotatedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97);
    } else {
      rotatedChar = char;
    }

    result += rotatedChar;
  }

  return result;
};
