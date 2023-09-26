//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (func) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (error, data) => {
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
    if (promises.length === 0) {
      resolve([]);
    } else {
      let results = new Array(promises.length);
      let completedCount = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = value;
            completedCount++;

            if (completedCount === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  });
};

export const allSettled = (promises) => {
  return new Promise((resolve) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let results = new Array(promises.length);
      let completedCount = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = { status: 'fulfilled', value };
          })
          .catch((reason) => {
            results[index] = { status: 'rejected', reason };
          })
          .finally(() => {
            completedCount++;

            if (completedCount === promises.length) {
              resolve(results);
            }
          });
      });
    }
  });
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

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      reject(new AggregateError('No promises in Promise.any were resolved'));
    } else {
      let errors = new Array(promises.length);
      let rejectedCount = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            resolve(value);
          })
          .catch((error) => {
            errors[index] = error;
            rejectedCount++;

            if (rejectedCount === promises.length) {
              reject(new AggregateError(errors));
            }
          });
      });
    }
  });
};
