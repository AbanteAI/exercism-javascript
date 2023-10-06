//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  if (typeof num !== 'number' || num < 1 || num > 31) {
    throw new Error('Invalid input');
  }

  const actions = [];
  const binary = num.toString(2).padStart(5, '0');

  if (binary[0] === '1') {
    actions.push('wink');
  }
  if (binary[1] === '1') {
    actions.push('double blink');
  }
  if (binary[2] === '1') {
    actions.push('close your eyes');
  }
  if (binary[3] === '1') {
    actions.push('jump');
  }
  if (binary[4] === '1') {
    actions.reverse();
  }


  return actions;
};

