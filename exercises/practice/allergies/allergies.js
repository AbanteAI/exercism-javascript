//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    const allergens = [
      { name: 'eggs', value: 1 },
      { name: 'peanuts', value: 2 },
      { name: 'shellfish', value: 4 },
      { name: 'strawberries', value: 8 },
      { name: 'tomatoes', value: 16 },
      { name: 'chocolate', value: 32 },
      { name: 'pollen', value: 64 },
      { name: 'cats', value: 128 },
    ];

    return allergens.filter(allergen => (this.score & allergen.value) !== 0).map(allergen => allergen.name);
  }

  allergicTo(allergenName) {
    const allergenList = this.list();
    return allergenList.includes(allergenName);
  }
}
