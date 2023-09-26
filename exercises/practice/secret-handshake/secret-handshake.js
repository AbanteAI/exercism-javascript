//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  const binary = number.toString(2).padStart(5, '0');
  const actions = [];
  
  if (binary[4] === '1') actions.push('wink');
  if (binary[3] === '1') actions.push('double blink');
  if (binary[2] === '1') actions.push('close your eyes');
  if (binary[1] === '1') actions.push('jump');
  if (binary[0] === '1') actions.reverse();

  return actions;
};
