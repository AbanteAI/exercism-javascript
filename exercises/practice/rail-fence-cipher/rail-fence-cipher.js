import { range, zip, flatten } from 'lodash';

export const encode = (message, rails) => {
  const fence = range(rails).map(() => []);
  let rail = 0;
  let direction = 1;

  for (const char of message) {
    fence[rail].push(char);
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  return flatten(fence).join('');
};

export const decode = (message, rails) => {
  const fence = range(rails).map(() => []);
  const fenceLengths = range(rails).map(() => 0);
  let rail = 0;
  let direction = 1;

  for (const _ of message) {
    fence[rail].push(null);
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  let messageIndex = 0;

  for (let i = 0; i < rails; i++) {
    fenceLengths[i] = fence[i].length;

    for (let j = 0; j < fenceLengths[i]; j++) {
      fence[i][j] = message[messageIndex];
      messageIndex++;
    }
  }

  rail = 0;
  direction = 1;
  let decodedMessage = '';

  for (let i = 0; i < message.length; i++) {
    decodedMessage += fence[rail].shift();
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  return decodedMessage;
};
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, rails) => {
  // Implement encoding logic here
};

export const decode = (message, rails) => {
  // Implement decoding logic here
};
};

export const decode = () => {
  throw new Error('Remove this statement and implement this function');
};
