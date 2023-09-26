//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
export class Clock {
  constructor(hours, minutes) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
  }

  toString() {
    const formattedHours = String(this.hours).padStart(2, '0');
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  plus(minutesToAdd) {
    const totalMinutes = this.hours * 60 + this.minutes + minutesToAdd;
    const newHours = Math.floor(totalMinutes / 60) % 24;
    const newMinutes = totalMinutes % 60;
    return new Clock(newHours, newMinutes);
  }

  minus(minutesToSubtract) {
    const totalMinutes = this.hours * 60 + this.minutes - minutesToSubtract;
    const newHours = (Math.floor(totalMinutes / 60) + 24) % 24;
    const newMinutes = (totalMinutes + 1440) % 60;
    return new Clock(newHours, newMinutes);
  }

  equals(otherClock) {
    return this.toString() === otherClock.toString();
  }
}
