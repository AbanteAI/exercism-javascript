//
// This is only a SKELETON file for the 'Point Mutations' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DNA {
  constructor(dnaStrand) {
    this.dnaStrand = dnaStrand;
;
  }
  }

  hammingDistance(otherStrand) {
    if (this.dnaStrand.length !== otherStrand.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let distance = 0;
    for (let i = 0; i < this.dnaStrand.length; i++) {
      if (this.dnaStrand[i] !== otherStrand[i]) {
        distance++;
      }
    }

    return distance;
  }
  }
}
