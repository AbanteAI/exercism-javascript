//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
  constructor() {
  }
  }

  waterDrinker() {
    const houses = this.generateHouses();
    for (const house of houses) {
      if (house.drinks === 'water') {
        return house.nationality;
      }
    }
  }
    for (const house of houses) {
      if (house.drinks === 'water') {
        return house.nationality;
      }
    }
  }

  zebraOwner() {
    const houses = this.generateHouses();
    for (const house of houses) {
      if (house.pet === 'zebra') {
        return house.nationality;
      }
    }
  }
}
