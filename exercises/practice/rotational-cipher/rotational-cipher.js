//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[a-z]/.test(char)) {
      const base = 'a'.charCodeAt(0);
      const rotated = (char.charCodeAt(0) - base + key) % 26;
      result += String.fromCharCode(rotated + base);
    } else if (/[A-Z]/.test(char)) {
      const base = 'A'.charCodeAt(0);
      const rotated = (char.charCodeAt(0) - base + key) % 26;
      result += String.fromCharCode(rotated + base);
    } else {
      result += char;
    }
  }
  return result;
};
