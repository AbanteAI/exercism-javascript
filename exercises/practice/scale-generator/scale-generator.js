//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic.charAt(0).toUpperCase() + tonic.slice(1).toLowerCase();
    this.sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    this.flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    this.useFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'].includes(this.tonic);
  }

  chromatic() {
    const scale = this.useFlats ? this.flats : this.sharps;
    const index = scale.findIndex(note => note.charAt(0) === this.tonic.charAt(0));
    return [...scale.slice(index), ...scale.slice(0, index)];
  }

  interval(intervals) {
    const scale = this.chromatic();
    const pattern = {
      'm': 1,
      'M': 2,
      'A': 3
    };
    let scaleIndex = 0;
    let result = [scale[scaleIndex]];
    intervals.split('').forEach(interval => {
      scaleIndex += pattern[interval];
      result.push(scale[scaleIndex % scale.length]);
    });
    return result;
  }
}
