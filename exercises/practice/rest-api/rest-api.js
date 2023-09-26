//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor() {
    this.users = {};
  }

    if (url === '/users') {
      const userList = Object.values(this.users);
      if (Object.keys(userList).length === 0) {
        return { users: userList };
      } else {
        return { users: userList.sort((a, b) => a.name.localeCompare(b.name)) };
      }
    }
  }

    if (url === '/add') {
      const { user } = payload;
      if (!this.users[user]) {
        this.users[user] = {
          name: user,
          owes: {},
          owed_by: {},
          balance: 0
        };
        return this.users[user];
      }
    } else if (url === '/iou') {
      const { lender, borrower, amount } = payload;
      this.updateIOU(lender, borrower, amount);
      const result = [this.users[lender], this.users[borrower]];
      return { users: result.sort((a, b) => a.name.localeCompare(b.name)) };
    }
  }
}

  updateIOU(lender, borrower, amount) {
    const lenderData = this.users[lender];
    const borrowerData = this.users[borrower];

    lenderData.owed_by[borrower] = (lenderData.owed_by[borrower] || 0) + amount;
    borrowerData.owes[lender] = (borrowerData.owes[lender] || 0) + amount;

    lenderData.balance = lenderData.balance + amount;
    borrowerData.balance = borrowerData.balance - amount;

    this.updateDebts(lenderData);
    this.updateDebts(borrowerData);
  }

  updateDebts(userData) {
    const { name, owes, owed_by } = userData;

    for (const user in owes) {
      if (owed_by[user]) {
        const debt = Math.min(owes[user], owed_by[user]);
        owes[user] -= debt;
        owed_by[user] -= debt;

        if (owes[user] === 0) {
          delete owes[user];
        }
        if (owed_by[user] === 0) {
          delete owed_by[user];
        }
      }
    }
  }
