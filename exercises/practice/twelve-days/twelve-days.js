//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (startVerse, endVerse = startVerse) => {
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

    let lyrics = [];

    for (let i = startVerse - 1; i < endVerse; i++) {
      let verse = `On the ${ordinals[i]} day of Christmas my true love gave to me: `;
      verse += gifts.slice(0, i + 1).reverse().join(", ");
      verse = verse.replace(/, ([^,]+)$/, ", and $1");
      verse += ".";
      lyrics.push(verse);
    }

    return lyrics.join("\n");
  };
  throw new Error('Remove this statement and implement this function');
};
