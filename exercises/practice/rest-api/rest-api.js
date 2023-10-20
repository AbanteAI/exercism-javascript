//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor(database = {}) {
    this.database = database;
  }

  get(url) {
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const users = queryParams.get('users') ? queryParams.get('users').split(',') : Object.keys(this.database);
    return { users: users.map(user => this.database[user]).filter(user => user) };
  }
  }

  post(url, payload) {
    if (url === '/add') {
      const newUser = {
        name: payload.user,
        owes: {},
        owed_by: {},
        balance: 0
      };
      this.database[payload.user] = newUser;
      return newUser;
    } else if (url === '/iou') {
      const { lender, borrower, amount } = payload;
      this.database[lender].owed_by[borrower] = (this.database[lender].owed_by[borrower] || 0) + amount;
      this.database[borrower].owes[lender] = (this.database[borrower].owes[lender] || 0) + amount;
      this.database[lender].balance += amount;
      this.database[borrower].balance -= amount;
      return { users: [this.database[lender], this.database[borrower]].filter(user => user).sort((a, b) => a.name.localeCompare(b.name)) };
    }
    }
  }
}
