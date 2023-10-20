//
// This is only a SKELETON file for the 'Two Bucket' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class TwoBucket {
  constructor(bucketOneSize, bucketTwoSize, goal, startBucket) {
    this.bucketOneSize = bucketOneSize;
    this.bucketTwoSize = bucketTwoSize;
    this.goal = goal;
    this.startBucket = startBucket;
  }

  solve() {
    let moves = 0;
    let bucketOne = 0;
    let bucketTwo = 0;

    while (bucketOne !== this.goal && bucketTwo !== this.goal) {
      moves++;

      if (this.startBucket === 'one') {
        if (bucketOne === 0) {
          bucketOne = this.bucketOneSize;
        } else if (bucketTwo === this.bucketTwoSize) {
          bucketTwo = 0;
        } else {
          const transfer = Math.min(bucketOne, this.bucketTwoSize - bucketTwo);
          bucketOne -= transfer;
          bucketTwo += transfer;
        }
      } else {
        if (bucketTwo === 0) {
          bucketTwo = this.bucketTwoSize;
        } else if (bucketOne === this.bucketOneSize) {
          bucketOne = 0;
        } else {
          const transfer = Math.min(bucketTwo, this.bucketOneSize - bucketOne);
          bucketTwo -= transfer;
          bucketOne += transfer;
        }
      }
    }

    return {
      moves: moves,
      goalBucket: bucketOne === this.goal ? 'one' : 'two',
      otherBucket: bucketOne === this.goal ? bucketTwo : bucketOne
    };
  }
}
