//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (input) => {
  const normalizedInput = input.toLowerCase().replace(/[-\s]/g, '');
  const uniqueChars = new Set(normalizedInput);
  return uniqueChars.size === normalizedInput.length;
};
