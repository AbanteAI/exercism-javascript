//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, dayOfWeek) => {
  const daysOfWeek = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };

  const descriptors = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    last: 0,
    monteenth: 13,
    tuesteenth: 14,
    wednesteenth: 15,
    thursteenth: 16,
    friteenth: 17,
    saturteenth: 18,
    sunteenth: 19,
  };

  const meetupDay = new Date(year, month - 1, 1);
  let count = 0;
  while (meetupDay.getDay() !== daysOfWeek[dayOfWeek]) {
    meetupDay.setDate(meetupDay.getDate() + 1);
  }

  if (descriptor === "teenth") {
    while (meetupDay.getDate() < 13) {
      meetupDay.setDate(meetupDay.getDate() + 7);
    }
  } else {
    count = descriptors[descriptor];
    if (descriptor === "last") {
      meetupDay.setMonth(meetupDay.getMonth() + 1);
      meetupDay.setDate(0);
    }
    meetupDay.setDate(meetupDay.getDate() + (count - 1) * 7);
  }

  return meetupDay;
};
