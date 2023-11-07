//
// This is only a SKELETON file for the 'Point Mutations' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DNA {
  constructor(dna) {
    this.dna = dna;
  };
  }

  hammingDistance(otherDna) {
    if (this.dna.length !== otherDna.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let distance = 0;
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] !== otherDna[i]) {
        distance++;
      }
    }

    return distance;
  };
  }
}
