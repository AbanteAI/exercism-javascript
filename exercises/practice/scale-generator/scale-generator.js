//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    const sharpScale = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const flatScale = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    const sharpKeys = ['G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#'];
    const useSharpScale = sharpKeys.includes(this.tonic);

    const chromaticScale = useSharpScale ? sharpScale : flatScale;
    const start = chromaticScale.indexOf(this.tonic.toUpperCase());
    return chromaticScale.slice(start, start + 12);
  }

  interval(intervals) {
    const chromaticScale = this.chromatic();
    let scale = [this.tonic];
    let currentIndex = 0;

    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      const steps = interval === 'M' ? 2 : interval === 'm' ? 1 : 0;
      currentIndex += steps;
      scale.push(chromaticScale[currentIndex]);
    }

    return scale;
  }
}
