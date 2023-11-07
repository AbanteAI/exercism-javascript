//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  if (number < 1 || number > 31) {
    throw new Error('Number must be between 1 and 31');
  }

  const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
  const binary = number.toString(2).padStart(5, '0');
  let sequence = [];

  for (let i = 0; i < actions.length; i++) {
    if (binary[binary.length - 1 - i] === '1') {
      sequence.push(actions[i]);
    }
  }

  if (binary[0] === '1') {
    sequence.reverse();
  }

  return sequence;
};
