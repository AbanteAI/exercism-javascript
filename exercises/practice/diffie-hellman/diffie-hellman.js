//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('p and g must be prime numbers');
    }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('privateKey must be greater than 1 and less than p');
    }
    return this.modPow(this.g, privateKey, this.p);
  }

  getSecret(theirPublicKey, myPrivateKey) {
    if (myPrivateKey <= 1 || myPrivateKey >= this.p) {
      throw new Error('myPrivateKey must be greater than 1 and less than p');
    }
    return this.modPow(theirPublicKey, myPrivateKey, this.p);
  }

  isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  modPow(base, exponent, modulus) {
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      base = (base * base) % modulus;
      exponent = Math.floor(exponent / 2);
    }
    return result;
  }
}
