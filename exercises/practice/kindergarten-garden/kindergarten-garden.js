//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.diagram = diagram;
    this.students = students.sort();
    this.plantsByStudent = this.assignPlantsToStudents();
  }

  assignPlantsToStudents() {
    const rows = this.diagram.split('\n');
    const plantsByStudent = {};

    for (let i = 0; i < rows[0].length; i += 2) {
      const plants = rows.map(row => row.slice(i, i + 2));
      let studentIndex = 0;

      for (let j = 0; j < plants.length; j++) {
        const student = this.students[studentIndex];

        if (!plantsByStudent[student]) {
          plantsByStudent[student] = [];
        }

        plantsByStudent[student].push(...plants[j]);

        studentIndex = (studentIndex + 1) % this.students.length;
      }
    }

    return plantsByStudent;
  }

    return plantsByStudent;
  }

  plants(student) {
    return this.plantsByStudent[student];
  }
}
