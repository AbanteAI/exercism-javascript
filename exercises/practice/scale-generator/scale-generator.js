//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  chromaticSharps() {
    const sharps = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const index = sharps.indexOf(this.tonic.toUpperCase());
    return sharps.slice(index).concat(sharps.slice(0, index));
  }

  chromaticFlats() {
    const flats = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
    const index = flats.indexOf(this.tonic.toUpperCase());
    return flats.slice(index).concat(flats.slice(0, index));
  }
  }

  chromatic() {
  chromatic() {
    const tonic = this.tonic.charAt(0).toUpperCase() + this.tonic.slice(1);
    const useSharps = ["C", "G", "D", "A", "E", "B", "F#", "a", "e", "b", "f#", "c#", "g#", "d#"].includes(tonic);
    return useSharps ? this.chromaticSharps() : this.chromaticFlats();
  }

  interval(intervals) {
  interval(intervals) {
    const chromaticScale = this.chromatic();
    let currentIndex = 0;
    const result = [chromaticScale[currentIndex]];

    for (const interval of intervals) {
      const steps = { "m": 1, "M": 2, "A": 3 }[interval];
      currentIndex += steps;
      result.push(chromaticScale[currentIndex]);
    }

    return result;
  }
}
