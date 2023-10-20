//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  // Check if key is within the valid range
  if (key < 0 || key > 26) {
    throw new Error('Invalid key');
  }

  // Create an array of lowercase letters
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // Create an array of uppercase letters
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Convert the text to an array of characters
  const characters = text.split('');

  // Iterate over each character
  const rotatedCharacters = characters.map((character) => {
    // Check if the character is a lowercase letter
    if (alphabet.includes(character)) {
      // Find the index of the character in the alphabet
      const index = alphabet.indexOf(character);

      // Rotate the character by the key
      const rotatedIndex = (index + key) % 26;

      // Get the rotated character from the alphabet
      return alphabet[rotatedIndex];
    }

    // Check if the character is an uppercase letter
    if (uppercaseAlphabet.includes(character)) {
      // Find the index of the character in the uppercase alphabet
      const index = uppercaseAlphabet.indexOf(character);

      // Rotate the character by the key
      const rotatedIndex = (index + key) % 26;

      // Get the rotated character from the uppercase alphabet
      return uppercaseAlphabet[rotatedIndex];
    }

    // Return the character as is if it is not a letter
    return character;
  });

  // Join the rotated characters into a string
  const rotatedText = rotatedCharacters.join('');

  // Return the rotated text
  return rotatedText;
};
