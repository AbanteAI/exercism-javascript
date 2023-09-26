//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
    constructor(value) {
        this.value = value;
        this.callbacks = [];
    }

    setValue(value) {
        this.value = value;
        this.callbacks.forEach(cb => cb());
    }
}

export class ComputeCell {
    constructor(inputCells, fn) {
        this.inputCells = inputCells;
        this.fn = fn;
        this.value = fn(inputCells);
        this.callbacks = [];

        inputCells.forEach(inputCell =>
            inputCell.callbacks.push(() => {
                const newValue = fn(inputCells);
                if (newValue !== this.value) {
                    this.value = newValue;
                    this.callbacks.forEach(cb => cb());
                }
            })
        );
    }

    addCallback(cb) {
        this.callbacks.push(cb);
    }

    removeCallback(cb) {
        this.callbacks = this.callbacks.filter(callback => callback !== cb);
    }
}

export class CallbackCell {
    constructor(fn) {
        this.fn = fn;
        this.values = [];

        this.callback = () => {
            const newValue = fn();
            if (newValue !== this.values[this.values.length - 1]) {
                this.values.push(newValue);
            }
        };
    }
}
