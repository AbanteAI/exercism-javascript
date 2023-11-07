//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text, numRails) => {
  const rails = Array.from({ length: numRails }, () => []);
  let railIndex = 0;
  let direction = 1;

  for (const char of text) {
    rails[railIndex].push(char);
    railIndex += direction;
    if (railIndex === 0 || railIndex === numRails - 1) {
      direction *= -1;
    }
  }

  return rails.flat().join('');
};

export const decode = (encodedText, numRails) => {
  const rails = Array.from({ length: numRails }, () => []);
  const railLengths = Array(numRails).fill(0);
  let railIndex = 0;
  let direction = 1;

  for (const char of encodedText) {
    railLengths[railIndex]++;
    railIndex += direction;
    if (railIndex === 0 || railIndex === numRails - 1) {
      direction *= -1;
    }
  }

  let index = 0;
  for (let i = 0; i < numRails; i++) {
    for (let j = 0; j < railLengths[i]; j++) {
      rails[i][j] = encodedText[index++];
    }
  }

  const result = [];
  railIndex = 0;
  direction = 1;

  for (let i = 0; i < encodedText.length; i++) {
    result.push(rails[railIndex].shift());
    railIndex += direction;
    if (railIndex === 0 || railIndex === numRails - 1) {
      direction *= -1;
    }
  }

  return result.join('');
};
