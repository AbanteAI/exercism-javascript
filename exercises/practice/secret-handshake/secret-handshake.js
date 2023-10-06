//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  if (typeof num !== 'number' || num < 1 || num > 31) {
    throw new Error('Invalid input');
  }

  const actions = [];
  const handshake = ['wink', 'double blink', 'close your eyes', 'jump'];

  for (let i = 0; i < handshake.length; i++) {
    if ((num & (1 << i)) !== 0) {
      actions.push(handshake[i]);
    }
  }

  if ((num & (1 << 4)) !== 0) {
    actions.reverse();
  }

  return actions;
};
