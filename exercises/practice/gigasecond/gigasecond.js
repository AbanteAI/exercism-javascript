//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const gigasecondInMillis = 1000000000 * 1000; // One gigasecond in milliseconds
  const newDate = new Date(date.getTime() + gigasecondInMillis);
  return newDate;
};
