//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  return input.replace(/(.)\1+/g, (match, char) => `${match.length}${char}`);
};

export const decode = (input) => {
  return input.replace(/(\d+)(\D)/g, (match, count, char) => char.repeat(Number(count)));
};
