//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, dayOfWeek) => {
  const daysOfWeek = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const daysInMonth = new Date(year, month, 0).getDate();

  const dayIndex = daysOfWeek[dayOfWeek];
  const descriptorIndex = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    last: -1,
    teenth: 13,
  }[descriptor];

  let meetupDate;
  if (descriptorIndex > 0) {
    meetupDate = new Date(year, month - 1, descriptorIndex);
    if (meetupDate.getDay() !== dayIndex) {
      meetupDate.setDate(descriptorIndex + 7);
    }
  } else {
    meetupDate = new Date(year, month, daysInMonth);
    while (meetupDate.getDay() !== dayIndex) {
      meetupDate.setDate(meetupDate.getDate() - 1);
    }
  }

  return meetupDate;
};
