//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
export class Allergies {
  constructor(score) {
    this.allergens = {
      1: "eggs",
      2: "peanuts",
      4: "shellfish",
      8: "strawberries",
      16: "tomatoes",
      32: "chocolate",
      64: "pollen",
      128: "cats"
    };
    this.score = score;
  }

  list() {
    return Object.values(this.allergens).filter(allergen => this.allergicTo(allergen));
  }

  allergicTo(allergen) {
    const allergenScore = Object.keys(this.allergens).find(key => this.allergens[key] === allergen);
    return (this.score & allergenScore) !== 0;
  }
}

  list() {
    throw new Error('Remove this statement and implement this function');
  }

  allergicTo() {
    throw new Error('Remove this statement and implement this function');
  }
}
