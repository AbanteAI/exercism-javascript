//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
    constructor() {
        this.houses = this.solvePuzzle();
    }

    solvePuzzle() {
        const permutations = (arr) => arr.length ? arr.reduce((acc, item, index) => [...acc, ...permutations([...arr.slice(0, index), ...arr.slice(index + 1)]).map((perm) => [item, ...perm])], []) : [[]];

        const houses = [1, 2, 3, 4, 5];
        const orderings = permutations(houses);

        for (const [red, green, ivory, yellow, blue] of orderings) {
            if (green !== ivory + 1) continue;

            for (const [Englishman, Spaniard, Ukrainian, Norwegian, Japanese] of orderings) {
                if (Englishman !== red) continue;
                if (Norwegian !== 1) continue;
                if (Norwegian !== blue + 1 && Norwegian !== blue - 1) continue;

                for (const [coffee, tea, milk, oj, water] of orderings) {
                    if (coffee !== green) continue;
                    if (Ukrainian !== tea) continue;
                    if (milk !== 3) continue;

                    for (const [OldGold, Kools, Chesterfields, LuckyStrike, Parliaments] of orderings) {
                        if (Kools !== yellow) continue;
                        if (LuckyStrike !== oj) continue;
                        if (Japanese !== Parliaments) continue;

                        for (const [dog, snails, fox, horse, zebra] of orderings) {
                            if (Spaniard !== dog) continue;
                            if (OldGold !== snails) continue;
                            if (Chesterfields !== fox + 1 && Chesterfields !== fox - 1) continue;
                            if (Kools !== horse + 1 && Kools !== horse - 1) continue;

                            return { water: water, zebra: zebra };
                        }
                    }
                }
            }
        }
    }

    waterDrinker() {
    waterDrinker() {
        const waterDrinkerNationality = {
            Englishman: "Englishman",
            Spaniard: "Spaniard",
            Ukrainian: "Ukrainian",
            Norwegian: "Norwegian",
            Japanese: "Japanese",
        };
        return waterDrinkerNationality[Object.keys(this.houses).find(key => this.houses[key] === this.houses.water)];
    }

    zebraOwner() {
        const zebraOwnerNationality = {
            Englishman: "Englishman",
            Spaniard: "Spaniard",
            Ukrainian: "Ukrainian",
            Norwegian: "Norwegian",
            Japanese: "Japanese",
        };
        return zebraOwnerNationality[Object.keys(this.houses).find(key => this.houses[key] === this.houses.zebra)];
    }
}
