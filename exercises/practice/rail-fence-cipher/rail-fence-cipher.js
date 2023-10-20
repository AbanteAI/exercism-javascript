//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text, rails) => {
  let fence = Array.from({ length: rails }, () => []);
  let rail = 0;
  let direction = 1;

  for (const char of text) {
    fence[rail].push(char);
    rail += direction;

    if (rail === rails - 1 || rail === 0) {
      direction = -direction;
    }
  }

  return fence.flat().join('');
};

export const decode = (encodedText, rails) => {
  let fence = Array.from({ length: rails }, () => []);
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < encodedText.length; i++) {
    fence[rail].push(i);
    rail += direction;

    if (rail === rails - 1 || rail === 0) {
      direction = -direction;
    }
  }

  let decodedText = Array(encodedText.length);
  let index = 0;

  for (const rail of fence) {
    for (const position of rail) {
      decodedText[position] = encodedText[index];
      index++;
    }
  }

  return decodedText.join('');
};
