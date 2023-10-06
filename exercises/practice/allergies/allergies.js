//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    const allergens = {
      1: 'eggs',
      2: 'peanuts',
      4: 'shellfish',
      8: 'strawberries',
      16: 'tomatoes',
      32: 'chocolate',
      64: 'pollen',
      128: 'cats',
    };

    return Object.entries(allergens)
      .filter(([value]) => (this.score & value) === value)
      .map(([, allergen]) => allergen);
  }

  allergicTo(item) {
    const allergens = {
      1: 'eggs',
      2: 'peanuts',
      4: 'shellfish',
      8: 'strawberries',
      16: 'tomatoes',
      32: 'chocolate',
      64: 'pollen',
      128: 'cats',
    };

    return (this.score & Object.keys(allergens).find(key => allergens[key] === item)) > 0;
  }
}

}
