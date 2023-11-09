//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const generateAtbashMapping = () => {
  const plain = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = plain.split('').reverse().join('');
  return new Map([...plain].map((char, index) => [char, cipher[index]]));
};

const atbashMapping = generateAtbashMapping();
export const encode = (input) => {
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const encoded = cleanedInput
    .split('')
    .map((char) => (atbashMapping.has(char) ? atbashMapping.get(char) : char))
    .join('');
  return encoded.match(/.{1,5}/g).join(' ');
};

export const decode = (input) => {
  const cleanedInput = input.replace(/ /g, '');
  return cleanedInput
    .split('')
    .map((char) => (atbashMapping.has(char) ? atbashMapping.get(char) : char))
    .join('');
};
