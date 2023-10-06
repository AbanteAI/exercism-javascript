//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static verse(number) {
    const phrases = [
      "the house that Jack built.",
      "the malt that lay in",
      "the rat that ate",
      "the cat that killed",
      "the dog that worried",
      "the cow with the crumpled horn that tossed",
      "the maiden all forlorn that milked",
      "the man all tattered and torn that kissed",
      "the priest all shaven and shorn that married",
      "the rooster that crowed in the morn that woke",
      "the farmer sowing his corn that kept",
      "the horse and the hound and the horn that belonged to"
    ];

    const versePhrases = phrases.slice(-number - 1);
    const verseLines = versePhrases.map((phrase, i) => {
      const line = `This is ${phrase}`;
      return i === 0 ? line : `that ${line}`;
    });


    return verseLines.join("\n");
  }

  static verses(startVerse, endVerse) {
    const allVerses = [];
    for (let i = startVerse; i <= endVerse; i++) {
      allVerses.push(this.verse(i));
    }
    return allVerses.join("\n\n");
  }
}

