//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.grades = {};
  }

  roster() {
    const sortedGrades = Object.keys(this.grades).sort();
    const sortedRoster = {};

    for (const grade of sortedGrades) {
      sortedRoster[grade] = this.grade(grade);
    }

    return sortedRoster;
  }

  add(name, grade) {
    if (!this.grades[grade]) {
      this.grades[grade] = [];
    }
    this.grades[grade].push(name);
    this.grades[grade].sort();
  }

  grade(grade) {
    return this.grades[grade] ? [...this.grades[grade]].sort() : [];
  }
}
