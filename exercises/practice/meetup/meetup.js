//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const nthDayOfWeek = (year, month, dayOfWeek, n) => {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const firstDayOfWeek = (7 + dayOfWeek - firstDayOfMonth.getDay()) % 7 + 1;
  return new Date(year, month - 1, firstDayOfWeek + (n - 1) * 7);
};
export const meetup = (year, month, descriptor) => {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  let meetupDate;

  switch (descriptor) {
    case 'first':
      meetupDate = nthDayOfWeek(year, month, 1, 1);
      break;
    case 'second':
      meetupDate = nthDayOfWeek(year, month, 1, 2);
      break;
    case 'third':
      meetupDate = nthDayOfWeek(year, month, 1, 3);
      break;
    case 'fourth':
      meetupDate = nthDayOfWeek(year, month, 1, 4);
      break;
    case 'fifth':
      meetupDate = nthDayOfWeek(year, month, 1, 5);
      break;
    case 'last':
      meetupDate = nthDayOfWeek(year, month, 1, 5);
      if (meetupDate.getMonth() !== month - 1) {
        meetupDate = nthDayOfWeek(year, month, 1, 4);
      }
      break;
    case 'monteenth':
    case 'tuesteenth':
    case 'wednesteenth':
    case 'thursteenth':
    case 'friteenth':
    case 'saturteenth':
    case 'sunteenth':
      const dayOfWeek = ['monteenth', 'tuesteenth', 'wednesteenth', 'thursteenth', 'friteenth', 'saturteenth', 'sunteenth'].indexOf(descriptor);
      meetupDate = nthDayOfWeek(year, month, dayOfWeek, 3);
      if (meetupDate.getDate() < 13) {
        meetupDate = nthDayOfWeek(year, month, dayOfWeek, 4);
      }
      break;
  }

  return meetupDate;

  return meetupDate;
};
