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
    let moves = 0;
    while (this.bucketOne !== this.goal && this.bucketTwo !== this.goal) {
      moves++;
      if (moves === 1) {
        this.startBucket === 'one' ? (this.bucketOne = this.bucketOneSize) : (this.bucketTwo = this.bucketTwoSize);
      } else {
        if (this.bucketOne === 0) {
          this.bucketOne = this.bucketOneSize;
        } else if (this.bucketTwo === this.bucketTwoSize) {
          this.bucketTwo = 0;
        } else {
          const transfer = Math.min(this.bucketOne, this.bucketTwoSize - this.bucketTwo);
          this.bucketOne -= transfer;
          this.bucketTwo += transfer;
        }
      }
    }

    const goalBucket = this.bucketOne === this.goal ? 'one' : 'two';
    const otherBucket = goalBucket === 'one' ? this.bucketTwo : this.bucketOne;

    return {
      moves: moves,
      goalBucket: goalBucket,
      otherBucket: otherBucket,
    };
  }
}

}
