//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = {};
  }

  roster() {
    const sortedRoster = {};
    for (const grade in this.students) {
      sortedRoster[grade] = [...this.students[grade]].sort();
    }
    return sortedRoster;
  }

  add(name, grade) {
    if (!this.students[grade]) {
      this.students[grade] = [];
    }
    this.students[grade].push(name);
    this.students[grade].sort();
  }

  grade(grade) {
    return this.students[grade] ? [...this.students[grade]] : [];
  }

  sortedRoster() {
    const sortedRoster = {};
    const sortedGrades = Object.keys(this.students).sort((a, b) => a - b);
    for (const grade of sortedGrades) {
      sortedRoster[grade] = [...this.students[grade]].sort();
    }
    return sortedRoster;
  }
}
