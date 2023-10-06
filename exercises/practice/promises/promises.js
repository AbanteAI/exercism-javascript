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

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = promises.length;

    if (count === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          count--;

          if (count === 0) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
};

export const allSettled = (promises) => {
  return new Promise((resolve) => {
    let results = [];
    let count = promises.length;

    if (count === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = { status: 'fulfilled', value: result };
        })
        .catch((reason) => {
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          count--;

          if (count === 0) {
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
      promise
        .then(resolve)
        .catch(reject);
    });
  });
};
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    let errors = [];

    promises.forEach((promise) => {
      promise
        .then(resolve)
        .catch((error) => {
          errors.push(error);

          if (errors.length === promises.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
};
