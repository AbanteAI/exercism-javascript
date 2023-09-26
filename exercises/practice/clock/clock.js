// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    const formattedHours = String(this.hours).padStart(2, '0');
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  plus(minutesToAdd) {
    const totalMinutes = this.hours * 60 + this.minutes + minutesToAdd;
    const normalizedMinutes = totalMinutes % 1440; // Total minutes in a day
    this.hours = Math.floor(normalizedMinutes / 60);
    this.minutes = normalizedMinutes % 60;
    return this;
  }

  minus(minutesToSubtract) {
    const totalMinutes = this.hours * 60 + this.minutes - minutesToSubtract;
    const normalizedMinutes = (1440 + totalMinutes) % 1440; // Total minutes in a day
    this.hours = Math.floor(normalizedMinutes / 60);
    this.minutes = normalizedMinutes % 60;
    return this;
  }

  equals(clockToCompare) {
    return this.toString() === clockToCompare.toString();
  }
}
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }
  }

  toString() {
    const formattedHours = String(this.hours).padStart(2, '0');
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
  }

  plus(minutesToAdd) {
    const totalMinutes = this.hours * 60 + this.minutes + minutesToAdd;
    const normalizedMinutes = totalMinutes % 1440; // Total minutes in a day
    this.hours = Math.floor(normalizedMinutes / 60);
    this.minutes = normalizedMinutes % 60;
    return this;
  }
  }

  minus(minutesToSubtract) {
    const totalMinutes = this.hours * 60 + this.minutes - minutesToSubtract;
    const normalizedMinutes = (1440 + totalMinutes) % 1440; // Total minutes in a day
    this.hours = Math.floor(normalizedMinutes / 60);
    this.minutes = normalizedMinutes % 60;
    return this;
  }
  }

  equals(clockToCompare) {
    return this.toString() === clockToCompare.toString();
  }
  }
}
