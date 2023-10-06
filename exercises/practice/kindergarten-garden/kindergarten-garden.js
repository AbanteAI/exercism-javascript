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
    this.diagram = diagram.split('\n');
    this.students = students.sort();
  }

    const index = this.students.indexOf(student);
    const plants = this.diagram.flatMap(row => row.slice(index * 2, index * 2 + 2))
      .map(code => PLANT_CODES[code]);
    return plants;
}
