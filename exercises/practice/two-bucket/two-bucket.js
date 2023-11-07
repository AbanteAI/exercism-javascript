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
    this.bucketOne = startBucket === 'one' ? 0 : bucketTwoSize;
    this.bucketTwo = startBucket === 'one' ? bucketOneSize : 0;
    this.moves = 0;
  }

solve() {
  while (this.bucketOne !== this.goal && this.bucketTwo !== this.goal) {
    this.moves++;
    if (this.bucketOne === 0 && this.startBucket === 'one') {
      this.bucketOne = this.bucketOneSize;
    } else if (this.bucketTwo === 0 && this.startBucket === 'two') {
      this.bucketTwo = this.bucketTwoSize;
    } else if (this.bucketOne === this.bucketOneSize) {
      this.bucketOne = 0;
    } else if (this.bucketTwo === this.bucketTwoSize) {
      this.bucketTwo = 0;
    } else if (this.startBucket === 'one') {
      let transfer = Math.min(this.bucketOne, this.bucketTwoSize - this.bucketTwo);
      this.bucketOne -= transfer;
      this.bucketTwo += transfer;
    } else {
      let transfer = Math.min(this.bucketTwo, this.bucketOneSize - this.bucketOne);
      this.bucketTwo -= transfer;
      this.bucketOne += transfer;
    }
  }
  return {
    moves: this.moves,
    goalBucket: this.bucketOne === this.goal ? 'one' : 'two',
    otherBucket: this.bucketOne === this.goal ? this.bucketTwo : this.bucketOne
  };
}
}
