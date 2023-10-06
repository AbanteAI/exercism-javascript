//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (input) => {
  const cleanedInput = input.replace(/[-\s]/g, "").toLowerCase();
  const letters = new Set(cleanedInput);
  return cleanedInput.length === letters.size;
};

