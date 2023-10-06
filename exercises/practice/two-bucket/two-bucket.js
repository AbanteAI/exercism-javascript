//
// This is only a SKELETON file for the 'Two Bucket' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class TwoBucket {
  constructor(bucketOneSize, bucketTwoSize, goalLiters, startBucket) {
    this.bucketOneSize = bucketOneSize;
    this.bucketTwoSize = bucketTwoSize;
    this.goalLiters = goalLiters;
    this.startBucket = startBucket;
  }

  solve() {
    const buckets = {
      one: { size: this.bucketOneSize, liters: 0 },
      two: { size: this.bucketTwoSize, liters: 0 }
    };

    const otherBucket = this.startBucket === "one" ? "two" : "one";
    let moves = 0;

    while (buckets.one.liters !== this.goalLiters && buckets.two.liters !== this.goalLiters) {
      if (buckets[this.startBucket].liters === 0) {
        buckets[this.startBucket].liters = buckets[this.startBucket].size;
        moves++;
      } else if (buckets[otherBucket].liters === buckets[otherBucket].size) {
        buckets[otherBucket].liters = 0;
        moves++;
      } else {
        const transferAmount = Math.min(
          buckets[this.startBucket].liters,
          buckets[otherBucket].size - buckets[otherBucket].liters
        );
        buckets[this.startBucket].liters -= transferAmount;
        buckets[otherBucket].liters += transferAmount;
        moves++;
      }
    }

    return {
      moves: moves,
      goalBucket: buckets.one.liters === this.goalLiters ? "one" : "two",
      otherBucket: buckets.one.liters === this.goalLiters ? buckets.two.liters : buckets.one.liters
    };
  }
}
