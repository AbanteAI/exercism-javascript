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
    this.diagram = diagram.split("\n");
    this.students = students.sort();
    this.plantsByStudent = {};
    this.assignPlantsToStudents();
}
  }

plants(student) {
    return this.plantsByStudent[student];
}
    return this.plantsByStudent[student];
}
  }
assignPlantsToStudents() {
    const rows = this.diagram.length;
    const cols = this.diagram[0].length;
    const plants = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j += 2) {
            const plantCode1 = this.diagram[i][j];
            const plantCode2 = this.diagram[i][j + 1];
            const plant1 = PLANT_CODES[plantCode1];
            const plant2 = PLANT_CODES[plantCode2];
            plants.push(plant1, plant2);
        }
    }
    for (let i = 0; i < this.students.length; i++) {
        const student = this.students[i];
        const startIndex = i * 2;
        const endIndex = startIndex + 1;
        this.plantsByStudent[student] = plants.slice(startIndex, endIndex + 1);
    }
}
}
