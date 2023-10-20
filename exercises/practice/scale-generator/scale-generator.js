//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Scale {
  constructor(tonic) {
    this.tonic = tonic.toUpperCase();
    this.sharps = ['C', 'G', 'D', 'A', 'E', 'B', 'F#'];
    this.flats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];
  }

  chromatic() {
    const scale = [];
    const notes = this.sharps.includes(this.tonic) ? this.sharps : this.flats;
    let index = notes.indexOf(this.tonic);
    for (let i = 0; i < 12; i++) {
      scale.push(notes[index]);
      index = (index + 1) % notes.length;
    }
    return scale;
  }

  interval(intervals) {
    const scale = [this.tonic];
    const notes = this.sharps.includes(this.tonic) ? this.sharps : this.flats;
    let index = notes.indexOf(this.tonic);
    for (const interval of intervals) {
      index = (index + interval) % notes.length;
      scale.push(notes[index]);
    }
    return scale;
  }
    return scale;
  }

  interval(intervals) {
    const scale = [this.tonic];
    const notes = this.sharps.includes(this.tonic) ? this.sharps : this.flats;
    let index = notes.indexOf(this.tonic);
    for (const interval of intervals) {
      index = (index + interval) % 7;
      scale.push(notes[index]);
    }
    return scale;
  }
}
