//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (callbackFunc) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      callbackFunc(...args, (error, data) => {
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
    let completedPromises = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((value) => {
        results[i] = value;
        completedPromises++;
        if (completedPromises === promises.length) {
          resolve(results);
        }
      }).catch(reject);
    }
  });
};

export const allSettled = (promises) => {
  return new Promise((resolve) => {
    let results = [];
    let completedPromises = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = { status: 'fulfilled', value };
      }).catch((reason) => {
        results[index] = { status: 'rejected', reason };
      }).finally(() => {
        completedPromises++;
        if (completedPromises === promises.length) {
          resolve(results);
        }
      });
    });
  });
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    let rejections = [];
    let rejectedCount = 0;
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch((error) => {
        rejections.push(error);
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject(new AggregateError(rejections, 'All promises were rejected'));
        }
      });
    });
  });
};
