//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3) throw new Error('Ability scores must be at least 3');
  if (score > 18) throw new Error('Ability scores can be at most 18');
  return Math.floor((score - 10) / 2);
};

export class Character {
static rollAbility() {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => b - a);
  return rolls.slice(0, 3).reduce((sum, roll) => sum + roll, 0);
}

get strength() {
  return this._strength;
}

get dexterity() {
  return this._dexterity;
}

get constitution() {
  return this._constitution;
}

get intelligence() {
  return this._intelligence;
}

get wisdom() {
  return this._wisdom;
}

get charisma() {
  return this._charisma;
}

get hitpoints() {
  return 10 + abilityModifier(this.constitution);
}
}

  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }
