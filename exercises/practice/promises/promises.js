//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fn) => {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
};

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

export const allSettled = (promises) => {
  return new Promise((resolve) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = { status: "fulfilled", value };
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    const errors = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          errors[index] = error;
          completed++;

          if (completed === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};
