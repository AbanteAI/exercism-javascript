//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series;
    this.series = series;
  }
  }

  slices(sliceLength) {
    if (sliceLength > this.series.length) {
      throw new Error('Slice length cannot be greater than series length');
    }

    const result = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      result.push(this.series.slice(i, i + sliceLength));
    }
    return result;
    if (sliceLength > this.series.length) {
      throw new Error('Slice length cannot be greater than series length');
    }

    const result = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      result.push(this.series.slice(i, i + sliceLength));
    }
    return result;
  }
  }
}
