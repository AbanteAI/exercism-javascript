//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  return Math.floor((score - 10) / 2);
};

export class Character {
  static rollAbility() {
    const diceRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    diceRolls.sort((a, b) => b - a);
    return diceRolls.slice(0, 3).reduce((sum, roll) => sum + roll, 0);
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

export class Character {
  static rollAbility() {
    throw new Error('Remove this statement and implement this function');
  }

  get strength() {
    throw new Error('Remove this statement and implement this function');
  }

  get dexterity() {
    throw new Error('Remove this statement and implement this function');
  }

  get constitution() {
    throw new Error('Remove this statement and implement this function');
  }

  get intelligence() {
    throw new Error('Remove this statement and implement this function');
  }

  get wisdom() {
    throw new Error('Remove this statement and implement this function');
  }

  get charisma() {
    throw new Error('Remove this statement and implement this function');
  }

  get hitpoints() {
    throw new Error('Remove this statement and implement this function');
  }
}
