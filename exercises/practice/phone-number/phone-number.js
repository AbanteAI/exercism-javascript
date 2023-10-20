//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/\D+/g, '');
  const numberLength = cleanedNumber.length;

  if (numberLength === 11 && cleanedNumber[0] === '1') {
    return cleanedNumber.slice(1);
  } else if (numberLength === 10) {
    return cleanedNumber;
  } else {
    throw new Error('Invalid phone number');
  }
};
