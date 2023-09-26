//
// This is only a SKELETON file for the 'Two Bucket' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class TwoBucket {
  constructor(bucketOneSize, bucketTwoSize, desiredLiters, startingBucket) {
    this.bucketOneSize = bucketOneSize;
    this.bucketTwoSize = bucketTwoSize;
    this.desiredLiters = desiredLiters;
    this.startingBucket = startingBucket;
  }

  solve() {
    let bucketOneLiters = 0;
    let bucketTwoLiters = 0;
    let actions = 0;

    while (bucketOneLiters !== this.desiredLiters && bucketTwoLiters !== this.desiredLiters) {
      if (this.startingBucket === "one") {
        if (bucketOneLiters === 0) {
          bucketOneLiters = this.bucketOneSize;
          actions++;
        } else if (bucketTwoLiters === this.bucketTwoSize) {
          bucketTwoLiters = 0;
          actions++;
        } else {
          const transferLiters = Math.min(bucketOneLiters, this.bucketTwoSize - bucketTwoLiters);
          bucketOneLiters -= transferLiters;
          bucketTwoLiters += transferLiters;
          actions++;
        }
      } else {
        if (bucketTwoLiters === 0) {
          bucketTwoLiters = this.bucketTwoSize;
          actions++;
        } else if (bucketOneLiters === this.bucketOneSize) {
          bucketOneLiters = 0;
          actions++;
        } else {
          const transferLiters = Math.min(bucketTwoLiters, this.bucketOneSize - bucketOneLiters);
          bucketTwoLiters -= transferLiters;
          bucketOneLiters += transferLiters;
          actions++;
        }
      }
    }

    const bucketWithDesiredLiters = bucketOneLiters === this.desiredLiters ? "one" : "two";
    const litersLeftInOtherBucket = bucketWithDesiredLiters === "one" ? bucketTwoLiters : bucketOneLiters;

    return {
      actions: actions,
      goalBucket: bucketWithDesiredLiters,
      otherBucket: litersLeftInOtherBucket
    };
  }
}

  solve() {
    throw new Error('Remove this statement and implement this function');
  }
}
