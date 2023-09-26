//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
static verse() {
    return `This is the house that Jack built.`;
}

static verses(startVerse, endVerse) {
    const verses = [
        "This is the house that Jack built.",
        "This is the malt\nthat lay in the house that Jack built.",
        "This is the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the cow with the crumpled horn\nthat tossed the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the maiden all forlorn\nthat milked the cow with the crumpled horn\nthat tossed the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the man all tattered and torn\nthat kissed the maiden all forlorn\nthat milked the cow with the crumpled horn\nthat tossed the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the priest all shaven and shorn\nthat married the man all tattered and torn\nthat kissed the maiden all forlorn\nthat milked the cow with the crumpled horn\nthat tossed the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the rooster that crowed in the morn\nthat woke the priest all shaven and shorn\nthat married the man all tattered and torn\nthat kissed the maiden all forlorn\nthat milked the cow with the crumpled horn\nthat tossed the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the farmer sowing his corn\nthat kept the rooster that crowed in the morn\nthat woke the priest all shaven and shorn\nthat married the man all tattered and torn\nthat kissed the maiden all forlorn\nthat milked the cow with the crumpled horn\nthat tossed the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built.",
        "This is the horse and the hound and the horn\nthat belonged to the farmer sowing his corn\nthat kept the rooster that crowed in the morn\nthat woke the priest all shaven and shorn\nthat married the man all tattered and torn\nthat kissed the maiden all forlorn\nthat milked the cow with the crumpled horn\nthat tossed the dog\nthat worried the cat\nthat killed the rat\nthat ate the malt\nthat lay in the house that Jack built."
    ];

    return verses.slice(startVerse - 1, endVerse).join("\n\n");
}
  }
}
