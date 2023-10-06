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
    this.diagram = diagram.split('\n');
    this.students = students.sort();
  }

  plants(student) {
    const index = this.students.indexOf(student);
    const plants = [];

    for (let i = 0; i < 2; i++) {
      const start = index * 2;
      plants.push(
        this.diagram[i].charAt(start),
        this.diagram[i].charAt(start + 1)
      );
    }

    return plants.map(code => PLANT_CODES[code]);
  }
}
