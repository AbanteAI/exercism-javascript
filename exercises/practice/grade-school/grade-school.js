//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }
  roster() {
    const result = {};
    for (const grade in this._roster) {
      result[grade] = [...this._roster[grade]];
    }
    return result;
  }

  add(name, grade) {
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(name);
    this._roster[grade].sort();
  }

  grade(gradeNumber) {
    return this._roster[gradeNumber] ? [...this._roster[gradeNumber]] : [];
  }
}
