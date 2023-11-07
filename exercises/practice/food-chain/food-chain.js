//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
verse(number) {
  // Initialize an array to hold the lines for the verse
  const lines = [
    "I know an old lady who swallowed a fly.",
    "I don't know why she swallowed the fly. Perhaps she'll die."
  ];

  // Return the joined lines for the verse
  return lines.join('\n');
}

verses(start, end) {
  // Initialize an array to hold all the verses
  let allVerses = [];

  // Loop from the start verse to the end verse
  for (let i = start; i <= end; i++) {
    // Get each verse and add it to the allVerses array
    allVerses.push(this.verse(i));
  }

  // Return the joined verses, separated by two newlines
  return allVerses.join('\n\n');
}

  verses() {
    throw new Error('Remove this statement and implement this function');
  }
}
