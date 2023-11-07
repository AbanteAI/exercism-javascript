//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gifts = [
  'a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming',
];

const days = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
];

export const recite = (startVerse = 1, endVerse = startVerse) => {
  let verses = [];

  for (let day = startVerse; day <= endVerse; day++) {
    let verseGifts = [];
    for (let i = day; i > 0; i--) {
      let gift = gifts[i - 1];
      if (i === 1 && day !== 1) {
        gift = 'and ' + gift;
      }
      verseGifts.push(gift);
    }
    verses.push(`On the ${days[day - 1]} day of Christmas my true love gave to me: ${verseGifts.join(', ')}.`);
  }

  return verses.join('\n\n') + '\n';
};
