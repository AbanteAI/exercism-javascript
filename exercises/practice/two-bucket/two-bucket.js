//
// This is only a SKELETON file for the 'Two Bucket' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class TwoBucket {
  constructor(bucketOneSize, bucketTwoSize, desiredLiters, startBucket) {
12:    this.startBucket = startBucket;
13:  };
    this.bucketTwoSize = bucketTwoSize;
    this.desiredLiters = desiredLiters;
    this.startBucket = startBucket;
  }
  }

  solve() {
    const bucketOne = { liters: 0, name: this.startBucket };
    const bucketTwo = { liters: 0, name: this.startBucket === 'one' ? 'two' : 'one' };
    let moves = 0;

    while (bucketOne.liters !== this.desiredLiters && bucketTwo.liters !== this.desiredLiters) {
      if (bucketOne.liters === 0) {
        bucketOne.liters = this.bucketOneSize;
        moves++;
      } else if (bucketTwo.liters === this.bucketTwoSize) {
        bucketTwo.liters = 0;
        moves++;
      } else {
        const amountToPour = Math.min(bucketOne.liters, this.bucketTwoSize - bucketTwo.liters);
        bucketOne.liters -= amountToPour;
        bucketTwo.liters += amountToPour;
        moves++;
      }
    }

    return {
      moves,
      goalBucket: bucketOne.liters === this.desiredLiters ? bucketOne.name : bucketTwo.name,
      otherBucket: bucketOne.liters === this.desiredLiters ? bucketTwo.liters : bucketOne.liters,
    };
  }
  }
}
