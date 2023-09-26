//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.isOpen = false;
    this.accountBalance = 0;
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
    this.accountBalance = 0;
  }

  deposit(amount) {
    if (!this.isOpen || amount < 0) {
      throw new ValueError('Invalid deposit');
    }
    this.accountBalance += amount;
  }

  withdraw(amount) {
    if (!this.isOpen || amount < 0 || amount > this.accountBalance) {
      throw new ValueError('Invalid withdrawal');
    }
    this.accountBalance -= amount;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError('Account is closed');
    }
    return this.accountBalance;
  }
}

export class ValueError extends Error {
  constructor(message) {
    super(message || 'Bank account error');
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
