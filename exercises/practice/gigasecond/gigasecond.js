//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate) => {
  const gigasecondInMillis = 1e12;
  const inputDateInMillis = inputDate.getTime();
  const gigasecondDateInMillis = inputDateInMillis + gigasecondInMillis;
  return new Date(gigasecondDateInMillis);
};
