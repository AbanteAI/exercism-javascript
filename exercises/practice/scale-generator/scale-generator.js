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
  }

  chromatic() {
    const scale = this.hasFlats() ? this.flats : this.sharps;
    const tonicIndex = scale.indexOf(this.tonic);
    const chromaticScale = scale.slice(tonicIndex).concat(scale.slice(0, tonicIndex));
    return chromaticScale;
  }
  }

  hasFlats() {
    return this.flats.includes(this.tonic);
  }

  interval(intervals) {
    const scale = this.chromatic();
    const pattern = intervals.split('');
    let currentNoteIndex = 0;
    const musicalScale = [scale[currentNoteIndex]];
    for (let i = 0; i < pattern.length; i++) {
      const interval = pattern[i];
      if (interval === 'M') {
        currentNoteIndex += 2;
      } else if (interval === 'm') {
        currentNoteIndex += 1;
      } else {
        throw new Error('Invalid interval');
      }
      musicalScale.push(scale[currentNoteIndex]);
    }
    return musicalScale;
  }
  }
}
