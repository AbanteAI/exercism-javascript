//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, rails) => {
  if (rails === 1) return message;

  const fence = Array.from({ length: rails }, () => []);
  let currentRail = 0;
  let direction = 1;

  for (const char of message) {
    fence[currentRail].push(char);
    currentRail += direction;

    if (currentRail === rails - 1 || currentRail === 0) {
      direction *= -1;
    }
  }

  return fence.flat().join("");
};
};

export const decode = (encodedMessage, rails) => {
  let result = "";
  let step = 1;
  let currentRail = 0;

  for (let i = 0; i < encodedMessage.length; i++) {
    if (currentRail === rails - 1) step = -1;
    if (currentRail === 0) step = 1;

    const railLength = Math.ceil(encodedMessage.length / rails);
    const railIndex = currentRail * railLength + Math.floor(i / 2);
    result += encodedMessage[railIndex];
    currentRail += step;
  }

  return result;
};
