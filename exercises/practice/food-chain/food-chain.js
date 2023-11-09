//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  verse(n) {
    const animals = [
      '',
      'fly',
      'spider',
      'bird',
      'cat',
      'dog',
      'goat',
      'cow',
      'horse',
    ];
    const phrases = [
      '',
      "I don't know why she swallowed the fly. Perhaps she'll die.",
      'It wriggled and jiggled and tickled inside her.',
      'How absurd to swallow a bird!',
      'Imagine that, to swallow a cat!',
      'What a hog, to swallow a dog!',
      'Just opened her throat and swallowed a goat!',
      "I don't know how she swallowed a cow!",
      "She's dead, of course!",
    ];

    let verseText = `I know an old lady who swallowed a ${animals[n]}.\n${phrases[n]}`;

    if (n < 8) {
      verseText += "\n";
      for (let i = n; i > 1; i--) {
        verseText += `She swallowed the ${animals[i]} to catch the ${animals[i - 1]}${i === 3 ? ' that wriggled and jiggled and tickled inside her' : ''}.\n`;
      }
      verseText += phrases[1];
    }

    return verseText;

    return verseText;
  }

  verses(start, end) {
    let songText = '';
    for (let i = start; i <= end; i++) {
      songText += this.verse(i);
      if (i !== end) {
        songText += '\n';
      }
    }
    return songText;
  }
}
