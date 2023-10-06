//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic.toUpperCase();
    this.scaleType = this.getScaleType();
  }

  getScaleType() {
    const sharpKeys = ['G', 'D', 'A', 'E', 'B', 'F#'];
    const flatKeys = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'];
    if (sharpKeys.includes(this.tonic)) {
      return 'sharp';
    } else if (flatKeys.includes(this.tonic)) {
      return 'flat';
    } else {
      return 'natural';
    }
  }

  chromatic() {
    const chromaticScale = [
      'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
    ];
    const tonicIndex = chromaticScale.indexOf(this.tonic);
    const scale = chromaticScale.slice(tonicIndex).concat(chromaticScale.slice(0, tonicIndex));
    return this.scaleType === 'flat' ? scale.map(note => note.replace('#', '♭')) : scale;
  }

  interval(intervals) {
    const steps = {
      'm': 1,
      'M': 2,
      'A': 3
    };
    const scale = this.chromatic();
    let currentNote = this.tonic;
    const result = [currentNote];
    for (const interval of intervals) {
      const step = steps[interval];
      currentNote = scale[(scale.indexOf(currentNote) + step) % scale.length];
      result.push(currentNote);
    }
    return result;
  }
}
