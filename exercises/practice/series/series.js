//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    if (sliceLength > this.series.length) {
      throw new Error('Slice length too large for the series');
    }

    let slices = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      slices.push(this.series.slice(i, i + sliceLength).split('').map(Number));
    }
    return slices;
  }
}
