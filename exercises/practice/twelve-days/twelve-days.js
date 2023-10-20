//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gifts = [
  "a Partridge in a Pear Tree",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming"
];

const ordinals = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth"
];

export const recite = (startVerse, endVerse = startVerse) => {
  let lyrics = "";
  for (let i = startVerse - 1; i < endVerse; i++) {
    lyrics += `On the ${ordinals[i]} day of Christmas my true love gave to me: `;
    for (let j = i; j >= 1; j--) {
      lyrics += `${gifts[j]}, `;
    }
    if (i > 0) {
      lyrics += "and ";
    }
    lyrics += `${gifts[0]}`;
    if (i < endVerse - 1) {
      lyrics += "\n\n";
    } else {
      lyrics += ".\n";
    }
  }
  return lyrics;
};
