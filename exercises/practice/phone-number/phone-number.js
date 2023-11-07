//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  // Remove punctuation, spaces, and country code if present
  const cleaned = phoneNumber.replace(/[^0-9]/g, '').replace(/^1/, '');

  // Check if number has 10 digits after cleaning
  if (cleaned.length !== 10) {
    throw new Error('Incorrect number of digits');
  }

  // Check if area code starts with 0 or 1
  if (cleaned[0] === '0' || cleaned[0] === '1') {
    throw new Error('Area code cannot start with zero or one');
  }

  // Check if exchange code starts with 0 or 1
  if (cleaned[3] === '0' || cleaned[3] === '1') {
    throw new Error('Exchange code cannot start with zero or one');
  }

  // If all validations pass, return the cleaned number
  return cleaned;
};
