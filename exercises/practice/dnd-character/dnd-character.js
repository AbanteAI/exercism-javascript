//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (constitution) => {
  return Math.floor((constitution - 10) / 2);
};

export class Character {
  static rollAbility() {
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort((a, b) => b - a);
    return rolls[0] + rolls[1] + rolls[2];
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
