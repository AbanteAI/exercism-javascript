//
// This is only a SKELETON file for the 'Point Mutations' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DNA {
  constructor(dnaStrand) {
    this.dnaStrand = dnaStrand;
  }
  constructor(dnaStrand) {
    this.dnaStrand = dnaStrand;
  }

  hammingDistance(comparisonStrand) {
    let distance = 0;
    for (let i = 0; i < this.dnaStrand.length; i++) {
      if (this.dnaStrand[i] !== comparisonStrand[i]) {
        distance++;
      }
    }
    return distance;
  }
}
}
