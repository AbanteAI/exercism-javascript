//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic.toUpperCase();
  }
  }

  chromatic() {
    const chromaticScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const startIdx = chromaticScale.findIndex(note => note.startsWith(this.tonic));
    return chromaticScale.slice(startIdx).map(note => note.toUpperCase());
  }
  interval(intervals) {
    const steps = { M: 2, m: 1, A: 3 };
    const scale = [this.tonic];
    let currentIdx = 0;
    for (const interval of intervals) {
      currentIdx += steps[interval];
      scale.push(chromaticScale[currentIdx % chromaticScale.length].toUpperCase());
    }
    return scale;
  }
}
