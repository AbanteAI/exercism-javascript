// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    constructor() {
        this.name = this.generateName();
    }

    static releaseNames() {
        // Implement releaseNames logic here
    }

    generateName() {
        let name = "";
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";

        for (let i = 0; i < 2; i++) {
            name += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        for (let i = 0; i < 3; i++) {
            name += digits.charAt(Math.floor(Math.random() * digits.length));
        }

        return name;
    }

    reset() {
        this.name = this.generateName();
    }
}
        let name = "";
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";

        for (let i = 0; i < 2; i++) {
            name += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        for (let i = 0; i < 3; i++) {
            name += digits.charAt(Math.floor(Math.random() * digits.length));
        }

        return name;
    }

    reset() {
        this.name = this.generateName();
    }
}