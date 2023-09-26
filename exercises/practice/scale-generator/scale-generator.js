//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic.charAt(0).toUpperCase() + tonic.slice(1).toLowerCase();
  }

  chromatic() {
  chromatic() {
    const sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    const useSharps = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#'];
    const baseScale = useSharps.includes(this.tonic) ? sharps : flats;
    const startIndex = baseScale.indexOf(this.tonic);
    const endIndex = startIndex + 12;
    return baseScale.slice(startIndex, endIndex);
  }
  }

  interval(intervals) {
    const chromaticScale = this.chromatic();
    let scale = [chromaticScale[0]];
    let index = 0;

    for (let interval of intervals) {
      if (interval === 'm') {
        index += 1;
      } else if (interval === 'M') {
        index += 2;
      } else if (interval === 'A') {
        index += 3;
      }
      scale.push(chromaticScale[index]);
    }

    return scale;
  }
}
