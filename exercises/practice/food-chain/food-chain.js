//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  verse(verseNumber) {
    const animals = [
      null,
      'fly',
      'spider',
      'bird',
      'cat',
      'dog',
      'goat',
      'cow',
      'horse',
    ];
    const reactions = [
      null,
      "I don't know why she swallowed the fly. Perhaps she'll die.",
      'It wriggled and jiggled and tickled inside her.',
      'How absurd to swallow a bird!',
      'Imagine that, to swallow a cat!',
      'What a hog, to swallow a dog!',
      'Just opened her throat and swallowed a goat!',
      "I don't know how she swallowed a cow!",
      "She's dead, of course!",
    ];

    let verse = `I know an old lady who swallowed a ${animals[verseNumber]}.\n${reactions[verseNumber]}\n`;

    if (verseNumber > 1 && verseNumber < 8) {
      for (let i = verseNumber; i >= 2; i--) {
        verse += `She swallowed the ${animals[i]} to catch the ${animals[i - 1]}`;
        if (i === 3) {
          verse += ' that wriggled and jiggled and tickled inside her.';
        }
        verse += '.\n';
      }
    }

    verse += reactions[verseNumber];

    return verse;
  }

  verses(startVerse, endVerse) {
    let song = '';
    for (let i = startVerse; i <= endVerse; i++) {
      song += this.verse(i);
      if (i !== endVerse) {
        song += '\n';
      }
    }
    return song;
  }

  verses() {
    throw new Error('Remove this statement and implement this function');
  }
}
