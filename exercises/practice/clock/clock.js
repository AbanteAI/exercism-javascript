//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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

  plus(minutes) {
    const totalMinutes = this.hours * 60 + this.minutes + minutes;
    const normalizedMinutes = (totalMinutes % 1440 + 1440) % 1440;
    this.hours = Math.floor(normalizedMinutes / 60);
    this.minutes = normalizedMinutes % 60;
    return this;
  }

  minus(minutes) {
    return this.plus(-minutes);
  }

  equals(otherClock) {
    return this.toString() === otherClock.toString();
  }
}
