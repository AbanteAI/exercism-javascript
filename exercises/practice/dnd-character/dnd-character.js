//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  return Math.floor((score - 10) / 2);
};

export class Character {
  static rollAbility() {
    return [...Array(4)].map(() => Math.floor(Math.random() * 6) + 1)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, val) => acc + val, 0);
  }

  get strength() {
    return Character.rollAbility();
  }

  get dexterity() {
    return Character.rollAbility();
  }

  get constitution() {
    return Character.rollAbility();
  }

  get intelligence() {
    return Character.rollAbility();
  }

  get wisdom() {
    return Character.rollAbility();
  }

  get charisma() {
    return Character.rollAbility();
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}

