//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._db = {};
  }

  roster() {
    const sortedRoster = {};
    Object.keys(this._db).sort().forEach(grade => {
      sortedRoster[grade] = [...this._db[grade]].sort();
    });
    return sortedRoster;
  }

  add(name, grade) {
    if (!this._db[grade]) {
      this._db[grade] = [];
    }
    this._db[grade].push(name);
  }

  grade(grade) {
    return this._db[grade] ? [...this._db[grade]].sort() : [];
  }
}
