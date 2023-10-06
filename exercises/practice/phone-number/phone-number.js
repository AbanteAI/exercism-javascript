//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');
  if (cleanedNumber.length === 11 && cleanedNumber[0] === '1') {
    return cleanedNumber.slice(1);
  }
  if (cleanedNumber.length !== 10) {
    throw new Error('Invalid phone number');
  }
  return cleanedNumber;
};
