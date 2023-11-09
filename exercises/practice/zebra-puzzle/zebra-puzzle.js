//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {

  waterDrinker() {
    // Implement the logic to find the water drinker based on the given constraints.
    const houses = this.solvePuzzle();
    const waterDrinkerHouse = houses.find(house => house.beverage === 'water');
    return waterDrinkerHouse.nationality;
  }

  zebraOwner() {
    // Implement the logic to find the zebra owner based on the given constraints.
    const houses = this.solvePuzzle();
    const zebraOwnerHouse = houses.find(house => house.pet === 'zebra');
    return zebraOwnerHouse.nationality;
  }
}
  solvePuzzle() {
    // Implement the logic to solve the zebra puzzle based on the given constraints.
    // This is a helper function that will be used by waterDrinker and zebraOwner methods.
    // Return an array of house objects with properties: color, nationality, pet, beverage, and cigarette.
  }
