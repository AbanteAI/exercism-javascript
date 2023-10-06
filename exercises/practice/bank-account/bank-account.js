//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._isOpen = false;
    this._balance = 0;
  }

  open() {
    if (this._isOpen) {
      throw new ValueError('Account is already open');
    }
    this._isOpen = true;
  }

  close() {
    if (!this._isOpen) {
      throw new ValueError('Account is already closed');
    }
    this._isOpen = false;
    this._balance = 0;
  }

  deposit(amount) {
    if (!this._isOpen || amount < 0) {
      throw new ValueError('Invalid deposit');
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this._isOpen || amount < 0 || amount > this._balance) {
      throw new ValueError('Invalid withdrawal');
    }
    this._balance -= amount;
  }

  get balance() {
    if (!this._isOpen) {
      throw new ValueError('Account is closed');
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
