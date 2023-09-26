//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, rails) => {
  if (rails === 1) return message;

  const fence = Array(rails).fill().map(() => []);
  let rail = 0;
  let direction = 1;

  for (let char of message) {
    fence[rail].push(char);

    if (rail === 0) {
      direction = 1;
    } else if (rail === rails - 1) {
      direction = -1;
    }

    rail += direction;
  }

  return fence.flat().join('');
};
};

export const decode = (encodedMessage, rails) => {
  if (rails === 1) return encodedMessage;

  const fence = Array(rails).fill().map(() => []);
  const railLengths = Array(rails).fill(0);
  let rail = 0;
  let direction = 1;

  for (let char of encodedMessage) {
    fence[rail].push(null);
    railLengths[rail]++;

    if (rail === 0) {
      direction = 1;
    } else if (rail === rails - 1) {
      direction = -1;
    }

    rail += direction;
  }

  let railIndex = 0;
  let messageIndex = 0;

  for (let i = 0; i < rails; i++) {
    for (let j = 0; j < railLengths[i]; j++) {
      fence[i][j] = encodedMessage[messageIndex++];
    }
  }

  let message = '';
  rail = 0;
  direction = 1;

  for (let i = 0; i < encodedMessage.length; i++) {
    message += fence[rail][0];
    fence[rail].shift();

    if (rail === 0) {
      direction = 1;
    } else if (rail === rails - 1) {
      direction = -1;
    }

    rail += direction;
  }

  return message;
};
};
