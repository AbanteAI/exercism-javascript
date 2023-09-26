//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
constructor() {
    this.houses = [
        { nationality: '', color: '', pet: '', drink: '', smoke: '' },
        { nationality: '', color: '', pet: '', drink: '', smoke: '' },
        { nationality: '', color: '', pet: '', drink: '', smoke: '' },
        { nationality: '', color: '', pet: '', drink: '', smoke: '' },
        { nationality: '', color: '', pet: '', drink: '', smoke: '' }
    ];
}

waterDrinker() {
    for (const house of this.houses) {
        if (house.drink === 'water') {
            return house.nationality;
        }
    }
}

zebraOwner() {
    for (const house of this.houses) {
        if (house.pet === 'zebra') {
            return house.nationality;
        }
    }
}
}
