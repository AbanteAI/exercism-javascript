//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;
    this.allergies = {
      1: 'eggs',
      2: 'peanuts',
      4: 'shellfish',
      8: 'strawberries',
      16: 'tomatoes',
      32: 'chocolate',
      64: 'pollen',
      128: 'cats'
    };
  }

  list() {
    return Object.values(this.allergies).filter(allergy => this.allergicTo(allergy));
  }

  allergicTo(allergy) {
    return !!(this.allergyScore & Object.keys(this.allergies).find(key => this.allergies[key] === allergy));
  }
}
