//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
  constructor() {
    this.residents = [
      {
        nationality: "",
        color: "",
        pet: "",
        drink: "",
        smoke: ""
      },
      {
        nationality: "",
        color: "",
        pet: "",
        drink: "",
        smoke: ""
      },
      {
        nationality: "",
        color: "",
        pet: "",
        drink: "",
        smoke: ""
      },
      {
        nationality: "",
        color: "",
        pet: "",
        drink: "",
        smoke: ""
      },
      {
        nationality: "",
        color: "",
        pet: "",
        drink: "",
        smoke: ""
      }
    ];
  }

  waterDrinker() {
    for (const resident of this.residents) {
      if (resident.drink === "water") {
        return resident.nationality;
      }
    }
  }

  zebraOwner() {
    for (const resident of this.residents) {
      if (resident.pet === "zebra") {
        return resident.nationality;
      }
    }
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
