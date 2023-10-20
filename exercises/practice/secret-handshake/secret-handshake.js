//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  const actionsMap = {
    '00001': 'wink',
    '00010': 'double blink',
    '00100': 'close your eyes',
    '01000': 'jump',
  };

  let binary = number.toString(2).padStart(5, '0');
  let actions = [];

  for (let i = binary.length - 1; i >= 0; i--) {
    let action = actionsMap[binary.slice(0, i + 1)];
    if (action) {
      actions.push(action);
    }
  }

  if (binary[0] === '1') {
    actions.reverse();
  }

  return actions;
};
