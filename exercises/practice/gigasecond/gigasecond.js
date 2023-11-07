//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate) => {
  const GIGASECOND_IN_MILLISECONDS = 1e9 * 1000;
  return new Date(inputDate.getTime() + GIGASECOND_IN_MILLISECONDS);
};
