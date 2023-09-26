//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  // Remove punctuation and country code if present
  const cleanedNumber = phoneNumber.replace(/[^\d]/g, "").replace(/^1/, "");
  
  return cleanedNumber;
};
