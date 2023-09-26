//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/[\s\.\-\(\)]+/g, '');
  const hasCountryCode = cleanedNumber.length === 11 && cleanedNumber.startsWith('1');
  const validLength = hasCountryCode ? 11 : 10;

  if (cleanedNumber.length !== validLength) {
    throw new Error('Invalid phone number length');
  }

  const numberToValidate = hasCountryCode ? cleanedNumber.slice(1) : cleanedNumber;
  const areaCode = numberToValidate[0];
  const exchangeCode = numberToValidate[3];

  if (areaCode < 2 || exchangeCode < 2) {
    throw new Error('Invalid phone number format');
  }

  return hasCountryCode ? cleanedNumber.slice(1) : cleanedNumber;
};
