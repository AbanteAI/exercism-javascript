//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (constitution) => {
  if (constitution < 3) throw new Error('Ability scores must be at least 3');
  if (constitution > 18) throw new Error('Ability scores can be at most 18');
  return Math.floor((constitution - 10) / 2);
};

export class Character {
  static rollAbility() {
    const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    return rolls.sort((a, b) => b - a).slice(0, 3).reduce((acc, curr) => acc + curr, 0);
  }

  get strength() {
    return this._strength || (this._strength = Character.rollAbility());
  }

  get dexterity() {
    return this._dexterity || (this._dexterity = Character.rollAbility());
  }

  get constitution() {
    return this._constitution || (this._constitution = Character.rollAbility());
  }

  get intelligence() {
    return this._intelligence || (this._intelligence = Character.rollAbility());
  }

  get wisdom() {
    return this._wisdom || (this._wisdom = Character.rollAbility());
  }

  get charisma() {
    return this._charisma || (this._charisma = Character.rollAbility());
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
