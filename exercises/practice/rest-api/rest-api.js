//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  get(url) {
    const params = this.parseQueryParams(url);
    const users = this.getUsers(params.users);
    return { users };
  }

  parseQueryParams(url) {
    const queryString = url.split('?')[1];
    const params = {};
    if (queryString) {
      const keyValuePairs = queryString.split('&');
      for (const pair of keyValuePairs) {
        const [key, value] = pair.split('=');
        params[key] = value.split(',');
      }
    }
    return params;
  }

  getUsers(users) {
    const allUsers = this.database.getAllUsers();
    if (!users) {
      return allUsers.sort((a, b) => a.name.localeCompare(b.name));
    }
    return allUsers.filter(user => users.includes(user.name));
  }
  }

  post(url, payload) {
    const { lender, borrower, amount } = payload;
41:+    this.database.addIOU(lender, borrower, amount);
42:+    const users = this.database.getUpdatedUsers(lender, borrower);
43:+    return { users };
    this.database.addIOU(lender, borrower, amount);
    const users = this.database.getUpdatedUsers(lender, borrower);
    return { users };
  }
  }
}
