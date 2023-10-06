//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, rails) => {
  if (rails === 1) return message;

  const fence = Array.from({ length: rails }, () => []);
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < message.length; i++) {
    fence[rail].push(message[i]);

    if (rail === 0) direction = 1;
    if (rail === rails - 1) direction = -1;

    rail += direction;
  }

  return fence.flat().join('');
};

export const decode = (encodedMessage, rails) => {
  if (rails === 1) return encodedMessage;

  const fence = Array.from({ length: rails }, () => []);
  const fenceLength = encodedMessage.length;
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < fenceLength; i++) {
    fence[rail].push(null);

    if (rail === 0) direction = 1;
    if (rail === rails - 1) direction = -1;

    rail += direction;
  }

  let index = 0;
  for (let i = 0; i < rails; i++) {
    for (let j = 0; j < fence[i].length; j++) {
      fence[i][j] = encodedMessage[index++];
    }
  }

  rail = 0;
  direction = 1;
  let decodedMessage = '';

  for (let i = 0; i < fenceLength; i++) {
    decodedMessage += fence[rail].shift();

    if (rail === 0) direction = 1;
    if (rail === rails - 1) direction = -1;

    rail += direction;
  }

  return decodedMessage;
};
};
