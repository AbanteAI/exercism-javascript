//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (verseNumber) => {
  const days = [
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'
  ];
  const gifts = [
    'a Partridge in a Pear Tree.',
    'two Turtle Doves, and',
    'three French Hens,',
    'four Calling Birds,',
    'five Gold Rings,',
    'six Geese-a-Laying,',
    'seven Swans-a-Swimming,',
    'eight Maids-a-Milking,',
    'nine Ladies Dancing,',
    'ten Lords-a-Leaping,',
    'eleven Pipers Piping,',
    'twelve Drummers Drumming,'
  ];

  let result = [];
  for (let i = 0; i < verseNumber; i++) {
    result.push(`On the ${days[i]} day of Christmas my true love gave to me:`);
    for (let j = i; j >= 0; j--) {
      if (j === 0 && i !== 0) {
        result.push(`and ${gifts[j]}`);
      } else {
        result.push(gifts[j]);
      }
    }
  }
  return result;
};


};

