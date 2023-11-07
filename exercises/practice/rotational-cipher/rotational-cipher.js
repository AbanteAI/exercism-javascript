//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  const rotateChar = (char, key) => {
    const isUpperCase = char === char.toUpperCase();
    const baseCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    const charCode = char.charCodeAt(0) - baseCode;
    if (charCode >= 0 && charCode < 26) {
      return String.fromCharCode(((charCode + key) % 26) + baseCode);
    }
    return char;
  };

  return text.split('').map(char => rotateChar(char, key)).join('');
};
