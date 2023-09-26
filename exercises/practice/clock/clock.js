//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.minutes = minutes;
  }
  }

  toString() {
    const formattedMinutes = String(this.minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
  }

  plus(minutes) {
    const normalizedMinutes = totalMinutes % 1440;
    this.hours = Math.floor(normalizedMinutes / 60);
    this.minutes = normalizedMinutes % 60;
    return this;
  }
  }

    return this.plus(-minutes);
  }
  }

  }
  }
}
