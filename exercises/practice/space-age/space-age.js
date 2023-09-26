//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (seconds, planet) => {
  const earthSeconds = 31557600;
  const orbitalPeriods = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1.0,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };

  const ageInYears = seconds / earthSeconds / orbitalPeriods[planet];
  return Number(ageInYears.toFixed(2));
};
