//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, dayOfWeek) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = days.indexOf(dayOfWeek);
  let date = new Date(year, month - 1, 1);

  if (descriptor === 'last') {
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    while (date.getDay() !== dayIndex) {
      date.setDate(date.getDate() - 1);
    }
  } else {
    while (date.getDay() !== dayIndex) {
      date.setDate(date.getDate() + 1);
      if (date.getDate() > 28 && descriptor.endsWith('teenth')) {
        break;
      }
    }
    if (descriptor.endsWith('teenth')) {
      while (date.getDate() < 13 || date.getDate() > 19) {
        date.setDate(date.getDate() + 7);
        if (date.getMonth() !== month - 1) {
          break;
        }
      }
    } else {
      const weekIndex = parseInt(descriptor[0]) - 1;
      date.setDate(date.getDate() + weekIndex * 7);
      if (date.getMonth() !== month - 1) {
        throw new Error('Invalid descriptor');
      }
    }
  }

  return date;
};
