//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  verse(number) {
    const animals = [
      null,
      "fly",
      "spider",
      "bird",
      "cat",
      "dog",
      "goat",
      "cow",
      "horse"
    ];

    const lines = [
      `I know an old lady who swallowed a ${animals[number]}.\nI don't know why she swallowed the fly. Perhaps she'll die.`,
      `I know an old lady who swallowed a ${animals[number]}.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don't know why she swallowed the fly. Perhaps she'll die.`,
      `I know an old lady who swallowed a ${animals[number]}.\nHow absurd to swallow a bird!\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don't know why she swallowed the fly. Perhaps she'll die.`,
      `I know an old lady who swallowed a ${animals[number]}.\nImagine that, to swallow a cat!\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don't know why she swallowed the fly. Perhaps she'll die.`,
      `I know an old lady who swallowed a ${animals[number]}.\nWhat a hog, to swallow a dog!\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don't know why she swallowed the fly. Perhaps she'll die.`,
      `I know an old lady who swallowed a ${animals[number]}.\nJust opened her throat and swallowed a goat!\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don't know why she swallowed the fly. Perhaps she'll die.`,
      `I know an old lady who swallowed a ${animals[number]}.\nI don't know how she swallowed a cow!\nShe swallowed the cow to catch the goat.\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don't know why she swallowed the fly. Perhaps she'll die.`,
      `I know an old lady who swallowed a ${animals[number]}.\nShe's dead, of course!`
    ];

    return lines[number - 1];
  }

  verses(start, end) {
    let song = "";
    for (let i = start; i <= end; i++) {
      song += this.verse(i);
      if (i !== end) {
        song += "\n\n";
      }
    }
    return song;
  }
}
}

  verses() {
    throw new Error('Remove this statement and implement this function');
  }
}
