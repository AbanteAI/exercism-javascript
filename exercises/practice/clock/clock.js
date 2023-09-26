//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes) {
    this.hours = (hours + Math.floor((minutes || 0) / 60)) % 24;
    this.minutes = (minutes || 0) % 60;
  }

  toString() {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;
  }

  plus(minutes) {
    return new Clock(this.hours, this.minutes + minutes);
  }

  minus(minutes) {
    return new Clock(this.hours, this.minutes - minutes);
  }

  equals(other) {
    return this.hours === other.hours && this.minutes === other.minutes;
  }
}
