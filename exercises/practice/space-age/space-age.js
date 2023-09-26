//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (seconds, planet) => {
  const earthYears = seconds / 31557600;

  switch (planet) {
    case 'mercury':
      return earthYears / 0.2408467;
    case 'venus':
      return earthYears / 0.61519726;
    case 'earth':
      return earthYears;
    case 'mars':
      return earthYears / 1.8808158;
    case 'jupiter':
      return earthYears / 11.862615;
    case 'saturn':
      return earthYears / 29.447498;
    case 'uranus':
      return earthYears / 84.016846;
    case 'neptune':
      return earthYears / 164.79132;
    default:
      throw new Error('Invalid planet');
  }
};
  switch (planet) {
    case 'mercury':
      return earthYears / 0.2408467;
    case 'venus':
      return earthYears / 0.61519726;
    case 'earth':
      return earthYears;
    case 'mars':
      return earthYears / 1.8808158;
    case 'jupiter':
      return earthYears / 11.862615;
    case 'saturn':
      return earthYears / 29.447498;
    case 'uranus':
      return earthYears / 84.016846;
    case 'neptune':
      return earthYears / 164.79132;
    default:
      throw new Error('Invalid planet');
  }
};
