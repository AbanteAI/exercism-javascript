//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

    const allergyList = [];
    let remainingScore = this.score;

    Object.entries(allergens)
      .reverse()
      .forEach(([value, allergen]) => {
        if (remainingScore >= value) {
          allergyList.push(allergen);
          remainingScore -= value;
        }
      });

    return allergyList;
  }
    throw new Error('Remove this statement and implement this function');
  }

  allergicTo(allergen) {
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

    const allergyList = this.list();
    return allergens[allergen] && allergyList.includes(allergens[allergen]);
  }
}
}
