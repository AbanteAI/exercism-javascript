//
// This is only a SKELETON file for the 'Point Mutations' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DNA {
  constructor(strand) {
    this.strand = strand;
  };
  }
  }

  hammingDistance(otherStrand) {
    if (this.strand.length !== otherStrand.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let distance = 0;
    for (let i = 0; i < this.strand.length; i++) {
      if (this.strand[i] !== otherStrand[i]) {
        distance++;
      }
    }

    return distance;
  }

    return distance;
  }
  }
}
