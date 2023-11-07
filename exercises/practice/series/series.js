//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  constructor(series) {
    this.series = series;
  }

    if (sliceLength > this.series.length) {
      throw new Error('Slice length cannot be greater than series length');
    }

    const slices = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      slices.push(this.series.substring(i, i + sliceLength));
    }

    return slices;
  }
}
