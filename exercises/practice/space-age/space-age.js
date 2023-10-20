//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const orbitalPeriods = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Earth: 1,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

const SECONDS_IN_EARTH_YEAR = 31557600;
export const age = (planet, seconds) => {
  const earthYears = seconds / SECONDS_IN_EARTH_YEAR;
  const planetYears = earthYears / orbitalPeriods[planet.charAt(0).toUpperCase() + planet.slice(1)];
  return parseFloat(planetYears.toFixed(2));
};
