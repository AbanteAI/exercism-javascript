//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

  let encoded = '';
  for (let i = 0; i < cleanInput.length; i++) {
    const char = cleanInput[i];
    if (/[a-z]/.test(char)) {
      const index = plain.indexOf(char);
      const encodedChar = cipher[index];
      encoded += encodedChar;
    } else {
      encoded += char;
    }
  }

  const groups = [];
  for (let i = 0; i < encoded.length; i += 5) {
    groups.push(encoded.slice(i, i + 5));
  }

  return groups.join(' ');
};

export const decode = (input) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  const cleanInput = input.replace(/[^a-z0-9]/g, '');

  let decoded = '';
  for (let i = 0; i < cleanInput.length; i++) {
    const char = cleanInput[i];
    if (/[a-z]/.test(char)) {
      const index = cipher.indexOf(char);
      const decodedChar = plain[index];
      decoded += decodedChar;
    } else {
      decoded += char;
    }
  }

  return decoded;
};
};

export const decode = (input) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';
  const cleanInput = input.replace(/[^a-z0-9]/g, '');

  let decoded = '';
  for (let i = 0; i < cleanInput.length; i++) {
    const char = cleanInput[i];
    if (/[a-z]/.test(char)) {
      const index = cipher.indexOf(char);
      const decodedChar = plain[index];
      decoded += decodedChar;
    } else {
      decoded += char;
    }
  }

  return decoded;
};
};
