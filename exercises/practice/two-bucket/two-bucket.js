//
// This is only a SKELETON file for the 'Two Bucket' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class TwoBucket {
  constructor(bucketOneSize, bucketTwoSize, desiredLiters, startBucket) {
    this.bucketOneSize = bucketOneSize;
    this.bucketTwoSize = bucketTwoSize;
    this.desiredLiters = desiredLiters;
    this.startBucket = startBucket;
  }

  solve() {
    let moves = 1;
    let goalBucket = '';
    let otherBucket = 0;

    let bucketOne = 0;
    let bucketTwo = 0;

    if (this.startBucket === 'one') {
      bucketOne = this.bucketOneSize;
    } else {
      bucketTwo = this.bucketTwoSize;
    }

    while (bucketOne !== this.desiredLiters && bucketTwo !== this.desiredLiters) {
      if (bucketOne === 0) {
        bucketOne = this.bucketOneSize;
        moves++;
      } else if (bucketTwo === this.bucketTwoSize) {
        bucketTwo = 0;
        moves++;
      } else {
        const amountToPour = Math.min(bucketOne, this.bucketTwoSize - bucketTwo);
        bucketOne -= amountToPour;
        bucketTwo += amountToPour;
        moves++;
      }
    }

    if (bucketOne === this.desiredLiters) {
      goalBucket = 'one';
      otherBucket = bucketTwo;
    } else {
      goalBucket = 'two';
      otherBucket = bucketOne;
    }

    return {
      moves,
      goalBucket,
      otherBucket
    };
  }
    };
  }
}
}
