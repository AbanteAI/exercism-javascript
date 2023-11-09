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
    const index = this.students.indexOf(student) * 2;
    const plantCodes = [
      this.diagram[0][index],
      this.diagram[0][index + 1],
      this.diagram[1][index],
      this.diagram[1][index + 1],
    ];

    return plantCodes.map((code) => PLANT_CODES[code]);
  }
}
