// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    constructor() {
        this.name = this.generateUniqueName();
    }

    generateRandomName() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letterPart = letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)];
        const numberPart = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
        return letterPart + numberPart;
    }

    reset() {
        this.name = this.generateUniqueName();
    }

    generateUniqueName() {
        let newName = this.generateRandomName();
        while (Robot.names.has(newName)) {
            newName = this.generateRandomName();
        }
        Robot.names.add(newName);
        return newName;
    }
}

Robot.names = new Set();
Robot.releaseNames = () => {
    Robot.names.clear();
};