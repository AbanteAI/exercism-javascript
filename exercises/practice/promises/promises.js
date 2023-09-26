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
    let resolvedCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          resolvedCount += 1;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

export const allSettled = (promises) => {
  return new Promise((resolve) => {
    const results = [];
    let settledCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = { status: 'fulfilled', value };
          settledCount += 1;

          if (settledCount === promises.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          results[index] = { status: 'rejected', reason };
          settledCount += 1;

          if (settledCount === promises.length) {
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
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          rejectedCount += 1;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, 'All promises were rejected'));
          }
        });
    });
  });
};
