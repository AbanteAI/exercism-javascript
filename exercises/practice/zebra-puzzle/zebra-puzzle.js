//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
    constructor() {
        this.houses = [
            { color: "yellow", nationality: "Norwegian", drink: "water", smoke: "Kools", pet: "fox" },
            { color: "blue", nationality: "Ukrainian", drink: "tea", smoke: "Chesterfields", pet: "horse" },
            { color: "red", nationality: "Englishman", drink: "milk", smoke: "Old Gold", pet: "snails" },
            { color: "ivory", nationality: "Spaniard", drink: "orange juice", smoke: "Lucky Strike", pet: "dog" },
            { color: "green", nationality: "Japanese", drink: "coffee", smoke: "Parliaments", pet: "zebra" },
        ];
    }

  waterDrinker() {
    const waterDrinkerHouse = this.houses.find(house => house.drink === "water");
    return waterDrinkerHouse.nationality;
  }

  zebraOwner() {
    const zebraOwnerHouse = this.houses.find(house => house.pet === "zebra");
    return zebraOwnerHouse.nationality;
  }
}
