//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor() {
    this.users = [];
  }
  }

  get(url) {
    if (url === '/users') {
      return { users: this.users };
    }
    throw new Error('Invalid URL');
  }
    if (url === '/users') {
      return { users: this.users };
    }
    throw new Error('Invalid URL');
  }
  }

  post(url, payload) {
    if (url === '/add') {
      const { user } = payload;
      const newUser = {
        name: user,
        owes: {},
        owed_by: {},
        balance: 0
      };
      this.users.push(newUser);
      return newUser;
    }
    throw new Error('Invalid URL');
  }
  }
}
