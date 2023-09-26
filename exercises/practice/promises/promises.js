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
    const results = [];
    let count = 0;
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          count++;
          if (count === promises.length) {
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
    let count = 0;
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = { status: 'fulfilled', value: result };
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          results[index] = { status: 'rejected', reason: error };
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    promises.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          count++;
          if (count === promises.length) {
            reject(new Error('All promises rejected'));
          }
        });
    });
  });
};
