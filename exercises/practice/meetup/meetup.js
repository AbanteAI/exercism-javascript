//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const descriptors = ['first', 'second', 'third', 'fourth', 'fifth', 'last', 'monteenth', 'tuesteenth', 'wednesteenth', 'thursteenth', 'friteenth', 'saturteenth', 'sunteenth'];

  const meetupDay = daysOfWeek.indexOf(descriptor.split(' ')[1]);
  const meetupDescriptor = descriptor.split(' ')[0];

  let meetupDate;

export const meetup = (year, month, descriptor) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const descriptors = ['first', 'second', 'third', 'fourth', 'fifth', 'last', 'monteenth', 'tuesteenth', 'wednesteenth', 'thursteenth', 'friteenth', 'saturteenth', 'sunteenth'];

  const meetupDay = daysOfWeek.indexOf(descriptor.split(' ')[1]);
  const meetupDescriptor = descriptor.split(' ')[0];

  let meetupDate;

  if (meetupDescriptor === 'teenth') {
    meetupDate = new Date(year, month, 13);
    while (meetupDate.getDay() !== meetupDay) {
      meetupDate.setDate(meetupDate.getDate() + 1);
    }
  } else if (meetupDescriptor === 'last') {
    meetupDate = new Date(year, month + 1, 0);
    while (meetupDate.getDay() !== meetupDay) {
      meetupDate.setDate(meetupDate.getDate() - 1);
    }
  } else {
    const meetupOccurrence = descriptors.indexOf(meetupDescriptor);
    meetupDate = new Date(year, month, 1 + (meetupDay + 7 - new Date(year, month, 1).getDay()) % 7 + meetupOccurrence * 7);
  }

  return meetupDate;
};
  }

  return meetupDate;
};
