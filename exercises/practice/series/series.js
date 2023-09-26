//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    const result = [];
    if (sliceLength > this.series.length) {
      throw new Error('Slice length cannot be greater than series length');
    }
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      result.push(this.series.slice(i, i + sliceLength));
    }
    return result;
  }

  slices(sliceLength) {
    throw new Error('Remove this statement and implement this function');
  }
}
