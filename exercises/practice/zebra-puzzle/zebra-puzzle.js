//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
constructor() {
constructor() {
    this.houses = [
        { color: "red", nationality: "Englishman", pet: "dog", drink: null, smoke: null },
        { color: "green", nationality: null, pet: null, drink: null, smoke: null },
        { color: "ivory", nationality: null, pet: null, drink: null, smoke: null },
        { color: null, nationality: null, pet: null, drink: null, smoke: null },
        { color: null, nationality: null, pet: null, drink: null, smoke: null }
    ];

    this.constraints = [
        (houses) => houses[0].nationality === "Norwegian",
        (houses) => houses.some((house, index) => house.color === "yellow" && (index === 0 || houses[index - 1].smoke === "Kools")),
        (houses) => houses.some((house, index) => house.nationality === "Norwegian" && (index === 0 || Math.abs(index - houses.findIndex(h => h.color === "blue")) === 1)),
        (houses) => houses.some((house, index) => house.drink === "water" && (index === 0 || houses[index - 1].pet === "fox")),
        (houses) => houses.some((house, index) => house.smoke === "Old Gold" && (index === 0 || houses[index - 1].pet === "snails")),
        (houses) => houses.some((house, index) => house.smoke === "Chesterfields" && (index === 0 || Math.abs(index - houses.findIndex(h => h.pet === "fox")) === 1)),
        (houses) => houses.some((house, index) => house.smoke === "Lucky Strike" && house.drink === "orange juice"),
        (houses) => houses.some((house) => house.nationality === "Japanese" && house.smoke === "Parliaments"),
        (houses) => houses.some((house, index) => house.nationality === "Englishman" && house.color === "red"),
        (houses) => houses.some((house, index) => house.nationality === "Spaniard" && house.pet === "dog"),
        (houses) => houses.some((house, index) => house.color === "green" && house.drink === "coffee"),
        (houses) => houses.some((house, index) => house.nationality === "Ukrainian" && house.drink === "tea"),
        (houses) => houses.some((house, index) => house.drink === "milk" && index === 2),
        (houses) => houses.some((house, index) => house.color === "green" && (index === 0 || houses[index - 1].color === "ivory")),
        (houses) => houses.some((house, index) => house.smoke === "Kools" && (index === 0 || Math.abs(index - houses.findIndex(h => h.pet === "horse")) === 1))
    ];
}
    ];
}
  }

waterDrinker() {
waterDrinker() {
    return this.houses.find((house) => house.drink
  }

zebraOwner() {
    for (const house of this.houses) {
        if (house.pet === "zebra") {
            return house.nationality;
        }
    }
}
  }
}
