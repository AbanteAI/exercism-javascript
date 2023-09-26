//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  constructor() {
    this.schoolRoster = {};
  }

  roster() {
    const sortedRoster = {};
    for (const grade in this.schoolRoster) {
      sortedRoster[grade] = [...this.schoolRoster[grade]].sort();
    }
    return sortedRoster;
  }

  add(student, grade) {
    if (!this.schoolRoster[grade]) {
      this.schoolRoster[grade] = [];
    }
    this.schoolRoster[grade].push(student);
    this.schoolRoster[grade].sort();
  }

  grade(grade) {
    return this.schoolRoster[grade] ? [...this.schoolRoster[grade]] : [];
  }

  sortedRoster() {
    const sortedRoster = {};
    const grades = Object.keys(this.schoolRoster).sort((a, b) => a - b);
    for (const grade of grades) {
      sortedRoster[grade] = [...this.schoolRoster[grade]].sort();
    }
    return sortedRoster;
  }
  roster() {
    const sortedRoster = {};
    for (const grade in this.schoolRoster) {
      sortedRoster[grade] = [...this.schoolRoster[grade]].sort();
    }
    return sortedRoster;
  }

  add(student, grade) {
    if (!this.schoolRoster[grade]) {
      this.schoolRoster[grade] = [];
    }
    this.schoolRoster[grade].push(student);
    this.schoolRoster[grade].sort();
  }

  grade(grade) {
    return this.schoolRoster[grade] ? [...this.schoolRoster[grade]] : [];
  }

  sortedRoster() {
    const sortedRoster = {};
    const grades = Object.keys(this.schoolRoster).sort((a, b) => a - b);
    for (const grade of grades) {
      sortedRoster[grade] = [...this.schoolRoster[grade]].sort();
    }
    return sortedRoster;
  }
  }

}
