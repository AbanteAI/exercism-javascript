//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  const rotateChar = (char, base) => {
    return String.fromCharCode(((char.charCodeAt(0) - base + key) % 26) + base);
  };

  return text
    .split('')
    .map((char) => {
      if (char >= 'A' && char <= 'Z') {
        return rotateChar(char, 'A'.charCodeAt(0));
      } else if (char >= 'a' && char <= 'z') {
        return rotateChar(char, 'a'.charCodeAt(0));
      } else {
        return char;
      }
    })
    .join('');
};
