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
    this.studentPlants = {};
    students.sort().forEach((student, index) => {
      const plantPositions = [(index * 2), (index * 2) + 1];
      this.studentPlants[student] = plantPositions.flatMap(position =>
        [diagram[0][position], diagram[0][position + 1], diagram[1][position], diagram[1][position + 1]]
          .map(code => PLANT_CODES[code])
      );
    });
  };
  }
  }

  plants(student) {
    return this.studentPlants[student];
  };
  }
}
