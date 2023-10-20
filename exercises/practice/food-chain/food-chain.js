//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  animals = [
    { name: 'fly', phrase: "I don't know why she swallowed the fly. Perhaps she'll die." },
    { name: 'spider', phrase: 'It wriggled and jiggled and tickled inside her.' },
    { name: 'bird', phrase: 'How absurd to swallow a bird!' },
    { name: 'cat', phrase: 'Imagine that, to swallow a cat!' },
    { name: 'dog', phrase: 'What a hog, to swallow a dog!' },
    { name: 'goat', phrase: 'Just opened her throat and swallowed a goat!' },
    { name: 'cow', phrase: "I don't know how she swallowed a cow!" },
    { name: 'horse', phrase: "She's dead, of course!" }
  ];

  verse(n) {
    let lyrics = `I know an old lady who swallowed a ${this.animals[n - 1].name}.\n${this.animals[n - 1].phrase}\n`;

    if (n > 1 && n < 8) {
      for (let i = n - 1; i > 0; i--) {
        lyrics += `She swallowed the ${this.animals[i].name} to catch the ${this.animals[i - 1].name}${i === 2 ? ' that wriggled and jiggled and tickled inside her' : ''}.\n`;
      }
      lyrics += this.animals[0].phrase;
    }

    return lyrics;
  }

  verses(start, end) {
    let lyrics = '';
    for (let i = start; i <= end; i++) {
      lyrics += this.verse(i) + '\n';
    }
    return lyrics;
  }
}
