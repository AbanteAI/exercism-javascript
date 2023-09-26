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
    this.bucketOne = 0;
    this.bucketTwo = 0;
  }

  solve() {
    let actions = 0;
    if (this.startBucket === 'one') {
      this.bucketOne = this.bucketOneSize;
    } else {
      this.bucketTwo = this.bucketTwoSize;
    }
    actions++;

    while (this.bucketOne !== this.goal && this.bucketTwo !== this.goal) {
      if (this.bucketOne === 0) {
        this.bucketOne = this.bucketOneSize;
      } else if (this.bucketTwo === this.bucketTwoSize) {
        this.bucketTwo = 0;
      } else {
        const transfer = Math.min(this.bucketOne, this.bucketTwoSize - this.bucketTwo);
        this.bucketOne -= transfer;
        this.bucketTwo += transfer;
      }
      actions++;
    }

    const resultBucket = this.bucketOne === this.goal ? 'one' : 'two';
    const otherBucket = resultBucket === 'one' ? this.bucketTwo : this.bucketOne;

    return {
      moves: actions,
      goalBucket: resultBucket,
      otherBucket: otherBucket
    };
  }
}
