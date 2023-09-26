//
  let factors = [];
  let divisor = 2;

  while (number > 1) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

