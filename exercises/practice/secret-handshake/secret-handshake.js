//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  const actions = [
    { code: 1, action: "wink" },
    { code: 2, action: "double blink" },
    { code: 4, action: "close your eyes" },
    { code: 8, action: "jump" },
  ];

  let handshake = [];
  actions.forEach((action) => {
    if (number & action.code) {
      handshake.push(action.action);
    }
  });

  if (number & 16) {
    handshake.reverse();
  }

  return handshake;
};
