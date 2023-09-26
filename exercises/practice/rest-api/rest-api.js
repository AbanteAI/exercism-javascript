import { User } from './rest-api';
//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor() {
    this.users = {};
  }

  get(url) {
    if (url === "/users") {
      const sortedUsers = Object.values(this.users)
        .sort((a, b) => a.name.localeCompare(b.name));
      return { users: sortedUsers };
    }
  }

  post(url, payload) {
    if (url === "/add") {
      const { user } = payload;
      if (!this.users[user]) {
        this.users[user] = new User(user);
      }
      return this.users[user];
    } else if (url === "/iou") {
      const { lender, borrower, amount } = payload;
      if (this.users[lender] && this.users[borrower]) {
        const lenderUser = this.users[lender];
        const borrowerUser = this.users[borrower];
        if (!lenderUser.owes[borrower]) {
          lenderUser.owes[borrower] = 0;
        }
        if (!borrowerUser.owedBy[lender]) {
          borrowerUser.owedBy[lender] = 0;
        }
        lenderUser.owes[borrower] += amount;
        borrowerUser.owedBy[lender] += amount;
        return { users: [lenderUser, borrowerUser].sort((a, b) => a.name.localeCompare(b.name)) };
      }
    }
  }
}
export class User {
  constructor(name) {
    this.name = name;
    this.owes = {};
    this.owedBy = {};
  }

  balance() {
    let totalOwed = Object.values(this.owes).reduce((a, b) => a + b, 0);
    let totalOwedTo = Object.values(this.owedBy).reduce((a, b) => a + b, 0);
    return totalOwedTo - totalOwed;
  }
}

  get(url) {
    if (url === "/users") {
      const sortedUsers = Object.values(this.users)
        .sort((a, b) => a.name.localeCompare(b.name));
      return { users: sortedUsers };
    }
  }

  post(url, payload) {
    throw new Error('Remove this statement and implement this function');
  }
}
