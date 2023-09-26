//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = () => {
  const gifts = [
    "a Partridge in a Pear Tree.",
    "two Turtle Doves,",
    "three French Hens,",
    "four Calling Birds,",
    "five Gold Rings,",
    "six Geese-a-Laying,",
    "seven Swans-a-Swimming,",
    "eight Maids-a-Milking,",
    "nine Ladies Dancing,",
    "ten Lords-a-Leaping,",
    "eleven Pipers Piping,",
    "twelve Drummers Drumming,"
  ];

  const days = [
    "first", "second", "third", "fourth", "fifth", "sixth",
    "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"
  ];

  const verses = [];
  for (let i = 0; i < 12; i++) {
    let verse = `On the ${days[i]} day of Christmas my true love gave to me: `;
    for (let j = i; j >= 0; j--) {
      if (j === 0 && i !== 0) {
        verse += "and ";
      }
      verse += gifts[j] + " ";
    }
    verses.push(verse.trim());
  }

  return verses;
};
