//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((score - 10) / 2);
};

export class Character {
static rollAbility() {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => b - a);
  rolls.pop();
  return rolls.reduce((a, b) => a + b, 0);
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
