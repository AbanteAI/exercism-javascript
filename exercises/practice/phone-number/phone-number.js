//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  if (cleanedPhoneNumber.length === 11 && cleanedPhoneNumber.startsWith('1')) {
    return cleanedPhoneNumber.slice(1);
  }
  return cleanedPhoneNumber;
};
