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
        let results = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    results[i] = result;
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
};

export const allSettled = (promises) => {
    return new Promise((resolve) => {
        let results = [];
        let count = 0;

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    results[i] = { status: "fulfilled", value: result };
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    results[i] = { status: "rejected", reason: error };
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                });
        }
    });
};

export const race = (promises) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
};

export const any = (promises) => {
    return new Promise((resolve, reject) => {
        let errors = [];

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    errors.push(error);

                    if (errors.length === promises.length) {
                        reject(errors);
                    }
                });
        }
    });
};
