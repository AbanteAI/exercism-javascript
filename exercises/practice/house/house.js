//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  verse(lineNumber) {
    const phrases = [
      "the horse and the hound and the horn",
      "the farmer sowing his corn",
      "the rooster that crowed in the morn",
      "the priest all shaven and shorn",
      "the man all tattered and torn",
      "the maiden all forlorn",
      "the cow with the crumpled horn",
      "the dog",
      "the cat",
      "the rat",
      "the malt",
      "the house that Jack built."
    ];

    const verseStart = "This is ";
    let verse = verseStart + phrases[phrases.length - 1];

    for (let i = phrases.length - 2; i >= phrases.length - lineNumber; i--) {
      verse = verseStart + phrases[i] + " " + verse;
    }

    return verse;
  }
  }
  verses(startVerse, endVerse) {
  static verses(startVerse, endVerse) {
    let verses = [];

    for (let i = startVerse; i <= endVerse; i++) {
      verses.push(this.verse(i));
    }

    return verses.join("\n");
  }
  }
}
