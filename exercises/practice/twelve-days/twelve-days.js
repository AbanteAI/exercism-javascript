//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = () => {
  const days = [
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'
  ];
  const gifts = [
    'a Partridge in a Pear Tree.',
    'two Turtle Doves, and ',
    'three French Hens, ',
    'four Calling Birds, ',
    'five Gold Rings, ',
    'six Geese-a-Laying, ',
    'seven Swans-a-Swimming, ',
    'eight Maids-a-Milking, ',
    'nine Ladies Dancing, ',
    'ten Lords-a-Leaping, ',
    'eleven Pipers Piping, ',
    'twelve Drummers Drumming, '
  ];

  let lyrics = '';
  for (let i = 0; i < days.length; i++) {
    lyrics += `On the ${days[i]} day of Christmas my true love gave to me: `;
    for (let j = i; j >= 0; j--) {
      lyrics += gifts[j];
    }
    lyrics += '\n\n';
  }
  return lyrics.trim();
};
