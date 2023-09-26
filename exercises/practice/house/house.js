//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const LINES = [
  "This is the house that Jack built.",
  "This is the malt",
  "that lay in the house that Jack built.",
  "This is the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the cow with the crumpled horn",
  "that tossed the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the maiden all forlorn",
  "that milked the cow with the crumpled horn",
  "that tossed the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the man all tattered and torn",
  "that kissed the maiden all forlorn",
  "that milked the cow with the crumpled horn",
  "that tossed the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the priest all shaven and shorn",
  "that married the man all tattered and torn",
  "that kissed the maiden all forlorn",
  "that milked the cow with the crumpled horn",
  "that tossed the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the rooster that crowed in the morn",
  "that woke the priest all shaven and shorn",
  "that married the man all tattered and torn",
  "that kissed the maiden all forlorn",
  "that milked the cow with the crumpled horn",
  "that tossed the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the farmer sowing his corn",
  "that kept the rooster that crowed in the morn",
  "that woke the priest all shaven and shorn",
  "that married the man all tattered and torn",
  "that kissed the maiden all forlorn",
  "that milked the cow with the crumpled horn",
  "that tossed the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built.",
  "This is the horse and the hound and the horn",
  "that belonged to the farmer sowing his corn",
  "that kept the rooster that crowed in the morn",
  "that woke the priest all shaven and shorn",
  "that married the man all tattered and torn",
  "that kissed the maiden all forlorn",
  "that milked the cow with the crumpled horn",
  "that tossed the dog",
  "that worried the cat",
  "that killed the rat",
  "that ate the malt",
  "that lay in the house that Jack built."
];

export class House {
  static verse(verseNumber) {
    const startIndex = (verseNumber - 1) * 3;
    const endIndex = startIndex + verseNumber * 2 - 1;
    return LINES.slice(startIndex, endIndex).join("\n");
  }

  static verses(startVerse, endVerse) {
    const verses = [];
    for (let i = startVerse; i <= endVerse; i++) {
      verses.push(this.verse(i));
    }
    return verses.join("\n\n");
  }
}
  static verse(verseNumber) {
    const startIndex = (verseNumber - 1) * 3;
    const endIndex = startIndex + verseNumber * 2 - 1;
    return LINES.slice(startIndex, endIndex).join("\n");
  }
  }

  static verses(startVerse, endVerse) {
    const verses = [];
    for (let i = startVerse; i <= endVerse; i++) {
      verses.push(this.verse(i));
    }
    return verses.join("\n\n");
  }
  }
}
