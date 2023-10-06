//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static verse(num) {
    const phrases = [
      "the house that Jack built.",
      "the malt that lay in ",
      "the rat that ate ",
      "the cat that killed ",
      "the dog that worried ",
      "the cow with the crumpled horn that tossed ",
      "the maiden all forlorn that milked ",
      "the man all tattered and torn that kissed ",
      "the priest all shaven and shorn that married ",
      "the rooster that crowed in the morn that woke ",
      "the farmer sowing his corn that kept ",
      "the horse and the hound and the horn that belonged to "
    ];

    let verse = "This is ";
    for (let i = num - 1; i >= 0; i--) {
      verse += phrases[i];
    }

    return verse;
  }

  static verses(start, end) {
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
