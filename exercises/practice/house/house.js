//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static verse(number) {
    const phrases = [
      "the horse and the hound and the horn",
      "the farmer sowing his corn",
      "the rooster that crowed in the morn",
      "the priest all shaven and shorn",
      "the man all tattered and torn",
      "the maiden all forlorn",
      "the cow with the crumpled horn",
      "the dog that worried the cat",
      "the cat that killed the rat",
      "the rat that ate the malt",
      "the malt that lay in the house that Jack built."
    ];

    const versePhrases = phrases.slice(11 - number);
    const verseLines = versePhrases.map((phrase, index) => {
      if (index === 0) {
        return `This is ${phrase}`;
      } else {
        return `that ${phrase}`;
      }
    });

    return verseLines.join("\n") + "\n";
  }
      "the horse and the hound and the horn",
      "the farmer sowing his corn",
      "the rooster that crowed in the morn",
      "the priest all shaven and shorn",
      "the man all tattered and torn",
      "the maiden all forlorn",
      "the cow with the crumpled horn",
      "the dog that worried the cat",
      "the cat that killed the rat",
      "the rat that ate the malt",
      "the malt that lay in the house that Jack built."
    ];

    const versePhrases = phrases.slice(11 - number);
    const verseLines = versePhrases.map((phrase, index) => {
      if (index === 0) {
        return `This is ${phrase}`;
      } else {
        return `that ${phrase}`;
      }
    });

    return verseLines.join("\n");
  }
  }

  static verses(start, end) {
    const allVerses = [];
    for (let i = start; i <= end; i++) {
      allVerses.push(this.verse(i));
    }
    return allVerses.join("\n\n") + "\n";
  }
    for (let i = start; i <= end; i++) {
      allVerses.push(this.verse(i));
    }
    return allVerses.join("\n\n");
  }
  }
}
