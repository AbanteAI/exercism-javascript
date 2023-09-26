//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  const binary = number.toString(2).padStart(5, '0');
  const actions = {
    '1': 'wink',
    '10': 'double blink',
    '100': 'close your eyes',
    '1000': 'jump',
    '10000': 'reverse',
  };
  const handshake = [];
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
      handshake.push(actions[Math.pow(10, binary.length - 1 - i)]);
    }
  }
  if (binary[4] === '1') {
    handshake.reverse();
  }
  return handshake;
};
