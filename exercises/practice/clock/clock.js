//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes) {
    this.hours = hours % 24;
    this.minutes = minutes % 60;
    while (this.minutes < 0) {
      this.minutes += 60;
      this.hours--;
    }
    this.hours = (this.hours + 24) % 24;
  }

  toString() {
    let hoursString = String(this.hours).padStart(2, '0');
    let minutesString = String(this.minutes).padStart(2, '0');
    return `${hoursString}:${minutesString}`;
  }

  plus(minutesToAdd) {
    this.minutes += minutesToAdd;
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }
    this.hours %= 24;
  }

  minus(minutesToSubtract) {
    this.minutes -= minutesToSubtract;
    while (this.minutes < 0) {
      this.minutes += 60;
      this.hours--;
    }
    this.hours = (this.hours + 24) % 24;
  }

  equals(otherClock) {
    return this.hours === otherClock.hours && this.minutes === otherClock.minutes;
  }
}
