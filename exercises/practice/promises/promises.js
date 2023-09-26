//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
};
};

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let counter = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          counter++;

          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
};

export const allSettled = (promises) => {
  return new Promise((resolve) => {
    const results = [];
    let counter = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch((reason) => {
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          counter++;

          if (counter === promises.length) {
            resolve(results);
          }
        });
    });
  });
};
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    const errors = [];

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          errors.push(error);

          if (errors.length === promises.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
};
};
