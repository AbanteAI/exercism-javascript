//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = {};
  }

  roster() {
    const sortedStudents = {};
    for (const grade in this.students) {
      sortedStudents[grade] = [...this.students[grade]].sort();
    }
    return sortedStudents;
  }
  }

  add(name, grade) {
    if (!this.students[grade]) {
      this.students[grade] = [];
    }
    this.students[grade].push(name);
    this.students[grade].sort();
  }
  }

  grade(grade) {
    return this.students[grade] ? [...this.students[grade]] : [];
  }
  }
}