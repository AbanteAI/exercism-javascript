//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor) => {
  const daysOfWeek = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
  };

  const nthDayOfWeek = {
    'first': 1,
    'second': 2,
    'third': 3,
    'fourth': 4,
    'fifth': 5,
    'last': -1,
  };

  const teenthDayOfWeek = {
    'monteenth': 1,
    'tuesteenth': 2,
    'wednesteenth': 3,
    'thursteenth': 4,
    'friteenth': 5,
    'saturteenth': 6,
    'sunteenth': 0,
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const meetupDay = new Date(year, month, 1);

  const meetupDay = new Date(year, month, 1);

  if (descriptor in nthDayOfWeek) {
    meetupDay.setDate(meetupDay.getDate() + (nthDayOfWeek[descriptor] - meetupDay.getDay() + 7) % 7);
  } else if (descriptor in teenthDayOfWeek) {
    meetupDay.setDate(meetupDay.getDate() + (teenthDayOfWeek[descriptor] - meetupDay.getDay() + 7) % 7);
    if (meetupDay.getDate() > 12) {
      meetupDay.setDate(meetupDay.getDate() - 7);
    }
  } else {
    throw new Error('Invalid descriptor');
  }

  if (meetupDay.getDate() > daysInMonth) {
    throw new Error('Invalid meetup date');
  }

  return meetupDay;
};

    throw new Error('Invalid descriptor');
  }

  if (meetupDay.getDate() > daysInMonth) {
    throw new Error('Invalid meetup date');
  }

  return meetupDay;
};

