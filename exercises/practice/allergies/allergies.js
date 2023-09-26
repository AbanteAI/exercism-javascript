//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
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
  }

  list() {
    const allergies = [];
    for (let [key, value] of Object.entries(this.allergens)) {
      if (this.score & key) {
        allergies.push(value);
      }
    }
    return allergies;
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}
}
