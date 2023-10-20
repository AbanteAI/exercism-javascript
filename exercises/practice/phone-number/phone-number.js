//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  // Remove punctuation
  phoneNumber = phoneNumber.replace(/[^\d]/g, '');

  // Remove country code if present
  if (phoneNumber.length === 11 && phoneNumber.startsWith('1')) {
    phoneNumber = phoneNumber.slice(1);
  }

  return phoneNumber;
};
