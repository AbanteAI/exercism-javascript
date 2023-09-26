//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (abilityScore) => {
  if (abilityScore < 3) {
    throw new Error("Ability score must be at least 3");
  }
  if (abilityScore > 18) {
    throw new Error("Ability score can't be higher than 18");
  }
  return Math.floor((abilityScore - 10) / 2);
};

export class Character {
  static rollAbility() {
    const diceRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    const sum = diceRolls.reduce((acc, curr) => acc + curr, 0);
    const minRoll = Math.min(...diceRolls);
    return sum - minRoll;
  }

  get strength() {
    if (!this._strength) {
      this._strength = Character.rollAbility();
    }
    return this._strength;
  }

  get dexterity() {
    if (!this._dexterity) {
      this._dexterity = Character.rollAbility();
    }
    return this._dexterity;
  }

  get constitution() {
    if (!this._constitution) {
      this._constitution = Character.rollAbility();
    }
    return this._constitution;
  }

  get intelligence() {
    if (!this._intelligence) {
      this._intelligence = Character.rollAbility();
    }
    return this._intelligence;
  }

  get wisdom() {
    if (!this._wisdom) {
      this._wisdom = Character.rollAbility();
    }
    return this._wisdom;
  }

  get charisma() {
    if (!this._charisma) {
      this._charisma = Character.rollAbility();
    }
    return this._charisma;
  }

  get hitpoints() {
    if (!this._hitpoints) {
      this._hitpoints = 10 + abilityModifier(this.constitution);
    }
    return this._hitpoints;
  }
}
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
