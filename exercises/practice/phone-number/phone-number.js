//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {
  const cleanedNumber = number.replace(/[^0-9]/g, '');

  if (cleanedNumber.length === 10) {
    return cleanedNumber;
  } else if (cleanedNumber.length === 11 && cleanedNumber.startsWith('1')) {
    return cleanedNumber.substring(1);
  } else {
    throw new Error('Invalid phone number');
  }
};
