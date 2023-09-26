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
    let bucketOneLiters = 0;
    let bucketTwoLiters = 0;
    let actions = 0;

    while (bucketOneLiters !== this.desiredLiters && bucketTwoLiters !== this.desiredLiters) {
      if (bucketOneLiters === 0) {
        bucketOneLiters = this.bucketOneSize;
        actions++;
      } else if (bucketTwoLiters === this.bucketTwoSize) {
        bucketTwoLiters = 0;
        actions++;
      } else {
        const transfer = Math.min(bucketOneLiters, this.bucketTwoSize - bucketTwoLiters);
        bucketOneLiters -= transfer;
        bucketTwoLiters += transfer;
        actions++;
      }
    }

    const otherBucket = bucketOneLiters === this.desiredLiters ? bucketTwoLiters : bucketOneLiters;
    return { actions, goalBucket: bucketOneLiters === this.desiredLiters ? "one" : "two", otherBucket };
  }
}
}

  solve() {
    throw new Error('Remove this statement and implement this function');
  }
}
