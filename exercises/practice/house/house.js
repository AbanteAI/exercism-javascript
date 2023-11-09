//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static lines = [
    "This is the house that Jack built.",
    "the malt\nthat lay in",
    "the rat\nthat ate",
    "the cat\nthat killed",
    "the dog\nthat worried",
    "the cow with the crumpled horn\nthat tossed",
    "the maiden all forlorn\nthat milked",
    "the man all tattered and torn\nthat kissed",
    "the priest all shaven and shorn\nthat married",
    "the rooster that crowed in the morn\nthat woke",
    "the farmer sowing his corn\nthat kept",
    "the horse and the hound and the horn\nthat belonged to",
  ];

  static verse(verseNumber) {
    let result = "This is ";
    for (let i = verseNumber - 1; i > 0; i--) {
      result += this.lines[i] + " ";
    }
    result += this.lines[0];
    return result;
  }

  static verses(startVerse, endVerse) {
    const result = [];
    for (let i = startVerse; i <= endVerse; i++) {
      result.push(this.verse(i));
    }
    return result.join("\n\n");
  }
}
}
