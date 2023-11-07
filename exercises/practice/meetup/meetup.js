//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, dayOfWeek) => {
  const daysOfWeek = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6
  };
  
const getDayFromDescriptor = (descriptor, month, year, targetDay) => {
  const teenthDays = [13, 14, 15, 16, 17, 18, 19];
  let day;

  switch (descriptor) {
    case 'first':
      day = 1;
      break;
    case 'second':
      day = 8;
      break;
    case 'third':
      day = 15;
      break;
    case 'fourth':
      day = 22;
      break;
    case 'fifth':
      day = 29;
      break;
    case 'last':
      const lastDay = new Date(year, month + 1, 0).getDate();
      day = lastDay - 6;
      break;
    case 'teenth':
      for (let i = 0; i < teenthDays.length; i++) {
        let testDate = new Date(year, month - 1, teenthDays[i]);
        if (testDate.getDay() === targetDay) {
          return teenthDays[i];
        }
      }
      break;
    default:
      throw new Error(`Unknown descriptor: ${descriptor}`);
  }
  return day;
};
  };

  const targetDay = daysOfWeek[dayOfWeek];
let day = getDayFromDescriptor(descriptor, month - 1, year, targetDay);
  let date = new Date(year, month - 1, day);

  while (date.getDay() !== targetDay) {
    date.setDate(date.getDate() + 1);
    if (descriptor === 'last' && date.getMonth() !== month - 1) {
      throw new Error('No such day exists in this month');
    }
  }

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
