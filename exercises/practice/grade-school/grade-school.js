//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }
  roster() {
    const sortedRoster = {};
    for (const grade in this._roster) {
      sortedRoster[grade] = [...this._roster[grade]].sort();
    }
    return sortedRoster;
  }

  add(name, grade) {
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(name);
  }

  grade(grade) {
    return this._roster[grade] ? [...this._roster[grade]].sort() : [];
  }
}
}
