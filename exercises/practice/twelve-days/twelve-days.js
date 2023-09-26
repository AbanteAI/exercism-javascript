//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = () => {
  const days = [
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth',
    'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'
  ];

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
    'twelve Drummers Drumming'
  ];

  function generateLyrics(day) {
    let lyrics = `On the ${days[day]} day of Christmas my true love gave to me: `;
    for (let i = day; i >= 0; i--) {
      if (i === 1 && day > 0) {
        lyrics += ', and ';
      } else if (i < day) {
        lyrics += ', ';
      }
      lyrics += gifts[i];
    }
    return lyrics + '.';
  }

    if (endDay === undefined) {
      endDay = startDay;
    }
    let result = '';
    for (let day = startDay - 1; day < endDay; day++) {
      if (day > startDay - 1) {
        result += '\n';
      }
      result += generateLyrics(day);
    }
    return result;
  };
};
