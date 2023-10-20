//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
class Clock {
  constructor(hours, minutes) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
  }

  toString() {
    const formattedHours = String(this.hours).padStart(2, '0');
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  plus(minutes) {
    const totalMinutes = this.hours * 60 + this.minutes + minutes;
    this.hours = Math.floor(totalMinutes / 60) % 24;
    this.minutes = totalMinutes % 60;
    return this;
  }

  minus(minutes) {
    return this.plus(-minutes);
  }

  equals(otherClock) {
    return this.toString() === otherClock.toString();
  }
}

export { Clock };
  constructor(hours, minutes) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
  }

  toString() {
    const formattedHours = String(this.hours).padStart(2, '0');
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  plus(minutes) {
    const totalMinutes = this.hours * 60 + this.minutes + minutes;
    this.hours = Math.floor(totalMinutes / 60) % 24;
    this.minutes = totalMinutes % 60;
    return this;
  }

  minus(minutes) {
    return this.plus(-minutes);
  }

  equals(otherClock) {
    return this.toString() === otherClock.toString();
  }
}
}
