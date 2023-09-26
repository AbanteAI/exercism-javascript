//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (description) => {
  const descriptors = {
    'first': 1,
    'second': 2,
    'third': 3,
    'fourth': 4,
    'fifth': 5,
    'last': -1,
    'monteenth': 0,
    'tuesteenth': 0,
    'wednesteenth': 0,
    'thursteenth': 0,
    'friteenth': 0,
    'saturteenth': 0,
    'sunteenth': 0
  };

  const daysOfWeek = {
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
    'sunday': 7
  };

  const regex = /The (\w+)(?: |-)(\w+) of (\w+) (\d+)/i;
  const [, descriptor, dayOfWeek, month, year] = regex.exec(description);

  const meetupDate = new Date(year, new Date(Date.parse(month + '1, 2012')).getMonth());
  const day = daysOfWeek[dayOfWeek.toLowerCase()];

  const descriptorValue = descriptors[descriptor.toLowerCase()];
  if (descriptorValue > 0) {
    meetupDate.setDate(1);
    meetupDate.setDate(1 + ((day - meetupDate.getDay() + 7) % 7) + (descriptorValue - 1) * 7);
  } else if (descriptorValue === 0) {
    meetupDate.setDate(13);
    while (meetupDate.getDay() !== day) {
      meetupDate.setDate(meetupDate.getDate() + 1);
    }
  } else {
    meetupDate.setMonth(meetupDate.getMonth() + 1);
    meetupDate.setDate(0);
    meetupDate.setDate(meetupDate.getDate() - ((meetupDate.getDay() - day + 7) % 7));
  }
    meetupDate.setMonth(meetupDate.getMonth() + 1);
    meetupDate.setDate(0);
    meetupDate.setDate(meetupDate.getDate() - ((meetupDate.getDay() - day + 7) % 7));
  }

  return meetupDate;
};
