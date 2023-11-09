//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate) => {
  const gigasecondInMilliseconds = 1e12;
  return new Date(inputDate.getTime() + gigasecondInMilliseconds);
};
