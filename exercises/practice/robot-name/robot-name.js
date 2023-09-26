// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    constructor() {
        this.usedNames = new Set();
        this.reset();
    }

    reset() {
        this.name = this.generateUniqueName();
    }

    generateUniqueName() {
        let name;
        do {
            name = this.generateName();
        } while (this.usedNames.has(name));
        this.usedNames.add(name);
        return name;
    }

    generateName() {
        return `${this.generateRandomLetter()}${this.generateRandomLetter()}${this.generateRandomDigit()}${this.generateRandomDigit()}${this.generateRandomDigit()}`;
    }

    generateRandomLetter() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    generateRandomDigit() {
        return Math.floor(Math.random() * 10);
    }
}

Robot.releaseNames = () => {
    Robot.usedNames = new Set();
};
