//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor(database = {}) {
    this.database = database;
  }

  get(url) {
    const query = url.split('?')[1];
    const users = query.split('=')[1].split(',');

    const result = { users: [] };
    for (const user of users) {
      if (user in this.database) {
        result.users.push(this.database[user]);
      }
    }

    return result;
  }

  post(url, payload) {
    if (url === '/add') {
      const user = payload.user;
      if (!(user in this.database)) {
        this.database[user] = {
          name: user,
          owes: {},
          owed_by: {},
          balance: 0,
        };
      }
      return this.database[user];
    } else if (url === '/iou') {
      const lender = payload.lender;
      const borrower = payload.borrower;
      const amount = payload.amount;

      if (lender in this.database && borrower in this.database) {
        const lenderUser = this.database[lender];
        const borrowerUser = this.database[borrower];

        if (amount > 0) {
          if (amount in lenderUser.owes) {
            lenderUser.owes[amount] += amount;
          } else {
            lenderUser.owes[amount] = amount;
          }
          if (amount in borrowerUser.owed_by) {
            borrowerUser.owed_by[amount] += amount;
          } else {
            borrowerUser.owed_by[amount] = amount;
          }

          lenderUser.balance += amount;
          borrowerUser.balance -= amount;
        }
      }
      return {
        users: [this.database[lender], this.database[borrower]],
      };
    }
  }
}
}

