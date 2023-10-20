//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours % 24;
    this.minutes = minutes % 60;
    this._normalize();
  }

  toString() {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;
  }

  plus(minutesToAdd) {
    this.minutes += minutesToAdd;
    this._normalize();
    return this;
  }

  minus(minutesToSubtract) {
    this.minutes -= minutesToSubtract;
    this._normalize();
    return this;
  }

  equals(otherClock) {
    return this.hours === otherClock.hours && this.minutes === otherClock.minutes;
  }
}
  _normalize() {
    while (this.minutes < 0) {
      this.minutes += 60;
      this.hours--;
    }
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }
    this.hours = (this.hours + 24) % 24;
  }
