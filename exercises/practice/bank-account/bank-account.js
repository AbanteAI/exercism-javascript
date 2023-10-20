//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.isOpen = false;
    this.currentBalance = 0;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError('Account is already open');
    }
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError('Account is already closed');
    }
    this.isOpen = false;
    this.currentBalance = 0;
  }

  deposit(amount) {
    if (!this.isOpen) {
      throw new ValueError('Account is closed');
    }
    if (amount < 0) {
      throw new ValueError('Invalid deposit amount');
    }
    this.currentBalance += amount;
  }

  withdraw(amount) {
    if (!this.isOpen) {
      throw new ValueError('Account is closed');
    }
    if (amount < 0) {
      throw new ValueError('Invalid withdrawal amount');
    }
    if (amount > this.currentBalance) {
      throw new ValueError('Insufficient balance');
    }
    this.currentBalance -= amount;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError('Account is closed');
    }
    return this.currentBalance;
  }
}

export class ValueError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValueError';
  }
}

