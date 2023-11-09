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
      throw new Error('Slice length is greater than the series length');
    }

    const slices = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const slice = this.series.slice(i, i + sliceLength).split('').map(Number);
      slices.push(slice);
    }
    return slices;
  }
}
