//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
  constructor() {
    this.residents = [
    this.residents = [
      { nationality: 'Englishman', color: '', pet: '', drink: '', cigarette: '' },
      { nationality: 'Spaniard', color: '', pet: '', drink: '', cigarette: '' },
      { nationality: 'Ukrainian', color: '', pet: '', drink: '', cigarette: '' },
      { nationality: 'Norwegian', color: '', pet: '', drink: '', cigarette: '' },
      { nationality: 'Japanese', color: '', pet: '', drink: '', cigarette: '' }
    ];
    ];

    this.colors = ['red', 'green', 'ivory', 'yellow', 'blue'];
    this.pets = ['dog', 'snails', 'fox', 'horse', 'zebra'];
    this.drinks = ['coffee', 'tea', 'milk', 'orange juice', 'water'];
    this.cigarettes = ['Old Gold', 'Kools', 'Chesterfields', 'Lucky Strike', 'Parliaments'];
  }

  waterDrinker() {
    for (let resident of this.residents) {
      if (resident.drinks === 'water') {
        return resident.nationality;
      }
    }
  }

  zebraOwner() {
    for (let resident of this.residents) {
      if (resident.pets === 'zebra') {
        return resident.nationality;
      }
    }
  }

  waterDrinker() {
    throw new Error('Remove this statement and implement this function');
  }

  zebraOwner() {
    throw new Error('Remove this statement and implement this function');
  }
}
