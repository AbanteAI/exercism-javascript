//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, dayOfWeek) => {
  const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const TEENTH_DAYS = [13, 14, 15, 16, 17, 18, 19];
  const firstDayOfMonth = new Date(year, month, 1);
  const meetupDay = DAYS_OF_WEEK.indexOf(dayOfWeek);

  let meetupDate;

  switch (descriptor) {
    case 'teenth':
      meetupDate = TEENTH_DAYS.find(day => {
        const date = new Date(year, month, day);
        return date.getDay() === meetupDay;
      });
      break;
    case 'last':
      for (let day = 31; day > 0; day--) {
        const date = new Date(year, month, day);
        if (date.getDay() === meetupDay) {
          meetupDate = day;
          break;
        }
      }
      break;
    default:
      const meetupWeek = parseInt(descriptor);
      let count = 0;
      for (let day = 1; day <= 31; day++) {
        const date = new Date(year, month, day);
        if (date.getDay() === meetupDay) {
          count++;
          if (count === meetupWeek) {
            meetupDate = day;
            break;
          }
        }
      }
    }

    if (meetupDate === undefined) {
      throw new Error('Invalid meetup descriptor');
    }

    return new Date(year, month, meetupDate);
  }

  return new Date(year, month, meetupDate);
};
