//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
export class Scale {
  constructor(tonic) {
    this.tonic = tonic.toUpperCase();
    this.chromaticScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    this.diatonicScales = {
      'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
      'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
      'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
      'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
      'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
      'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
      'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
      'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
      'Bb': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
      'Eb': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
      'Ab': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
      'Db': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
      'Gb': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
      'Cb': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']
    };
  }

  chromatic() {
    const tonicIndex = this.chromaticScale.indexOf(this.tonic);
    const scale = this.chromaticScale.slice(tonicIndex).concat(this.chromaticScale.slice(0, tonicIndex));
    return scale.map(note => note.toUpperCase());
  }

  interval(intervals) {
    const scale = this.diatonicScales[this.tonic];
    const result = [this.tonic];
    let currentIndex = 0;
    for (const interval of intervals) {
      if (interval === 'M') {
        currentIndex += 2;
      } else if (interval === 'm') {
        currentIndex += 1;
      }
      result.push(scale[currentIndex % scale.length]);
    }
    return result;
  }
}
}
