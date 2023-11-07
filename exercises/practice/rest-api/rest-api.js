//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
constructor(database = { users: [] }) {
  this.database = database;
}
}

get(url) {
  // Assuming URL is in the format: /users?users=Adam,Bob
  const queryParams = url.split('?')[1];
  let users = this.database.users;
  if (queryParams) {
    const usersFilter = queryParams.split('=')[1].split(',');
    users = users.filter(user => usersFilter.includes(user.name));
  }
  return { users: users.sort((a, b) => a.name.localeCompare(b.name)) };
}
}

post(url, payload) {
  switch (url) {
    case '/add':
      const newUser = {
        name: payload.user,
        owes: {},
        owed_by: {},
        balance: 0.0
      };
      this.database.users.push(newUser);
      return newUser;
    case '/iou':
      const lender = this.database.users.find(user => user.name === payload.lender);
      const borrower = this.database.users.find(user => user.name === payload.borrower);
      lender.owed_by[borrower.name] = (lender.owed_by[borrower.name] || 0) + payload.amount;
      borrower.owes[lender.name] = (borrower.owes[lender.name] || 0) + payload.amount;
      lender.balance += payload.amount;
      borrower.balance -= payload.amount;
      return {
        users: [lender, borrower].sort((a, b) => a.name.localeCompare(b.name))
      };
    default:
      throw new Error(`Unsupported route: ${url}`);
}
}
}
}
