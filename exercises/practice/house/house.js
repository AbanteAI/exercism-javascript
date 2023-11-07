//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function verse(number) {
  const parts = [
    'the house that Jack built.',
    'the malt\nthat lay in ',
    'the rat\nthat ate ',
    'the cat\nthat killed ',
    'the dog\nthat worried ',
    'the cow with the crumpled horn\nthat tossed ',
    'the maiden all forlorn\nthat milked ',
    'the man all tattered and torn\nthat kissed ',
    'the priest all shaven and shorn\nthat married ',
    'the rooster that crowed in the morn\nthat woke ',
    'the farmer sowing his corn\nthat kept ',
    'the horse and the hound and the horn\nthat belonged to ',
  ];
  let verseText = 'This is ';
  for (let i = number - 1; i >= 0; i--) {
    verseText += parts[i];
  }
  return verseText;
}

function verses(start, end) {
  let versesArray = [];
  for (let i = start; i <= end; i++) {
    versesArray.push(verse(i));
  }
  return versesArray.join('\n\n');
}

export { verse, verses };
