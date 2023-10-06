//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  formatNumber(value) {
    return String(value).padStart(2, '0');
  }
  }

  toString() {
    return `${this.formatNumber(this.hour)}:${this.formatNumber(this.minute)}`;
  }

  plus(minutes) {
    const totalMinutes = this.hour * 60 + this.minute + minutes;
    this.hour = (totalMinutes / 60) % 24;
    this.minute = totalMinutes % 60;
    return this;
  }

  minus(minutes) {
    const totalMinutes = this.hour * 60 + this.minute - minutes;
    this.hour = (totalMinutes / 60 + 24) % 24;
    this.minute = (totalMinutes + 60) % 60;
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
