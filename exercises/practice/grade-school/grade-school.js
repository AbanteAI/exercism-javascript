//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
roster() {
    return {};
}

add(student, grade) {
    // Check if the grade already exists in the roster
    if (!this.roster.hasOwnProperty(grade)) {
        this.roster[grade] = [];
    }
    // Add the student to the grade
    this.roster[grade].push(student);
}

grade(grade) {
    // Check if the grade exists in the roster
    if (this.roster.hasOwnProperty(grade)) {
        // Return a sorted copy of the students in the grade
        return [...this.roster[grade]].sort();
    } else {
        return [];
    }
}

allStudents() {
    // Get all the students from all the grades
    const students = [];
    for (const grade in this.roster) {
        students.push(...this.roster[grade]);
    }
    // Sort the students alphabetically
    return students.sort();
}
}
