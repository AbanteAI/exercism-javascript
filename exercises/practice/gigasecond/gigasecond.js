//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  const gigasecondInMilliseconds = 10 ** 12; // One gigasecond is 10^9 seconds, which is 10^12 milliseconds.
  const endDate = new Date(startDate.getTime() + gigasecondInMilliseconds);
  return endDate;
};
}
