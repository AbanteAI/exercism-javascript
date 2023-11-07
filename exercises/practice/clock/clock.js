//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
constructor(hour = 0, minute = 0) {
    this.minutes = (hour * 60 + minute) % 1440;
    if (this.minutes < 0) this.minutes += 1440;
}
  }

toString() {
    const hours = Math.floor(this.minutes / 60).toString().padStart(2, '0');
    const minutes = (this.minutes % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}
  }

plus(minutesToAdd) {
    this.minutes = (this.minutes + minutesToAdd) % 1440;
    if (this.minutes < 0) this.minutes += 1440;
    return this;
}
  }

minus(minutesToSubtract) {
    return this.plus(-minutesToSubtract);
}
  }

equals(otherClock) {
    return this.minutes === otherClock.minutes;
}
  }
}
