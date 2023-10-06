//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('p and g must be prime numbers');
    }
    this.p = p;
    this.g = g;
  }

  isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('privateKey must be greater than 1 and less than p');
    }
    return BigInt(this.g) ** BigInt(privateKey) % BigInt(this.p);
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return BigInt(theirPublicKey) ** BigInt(myPrivateKey) % BigInt(this.p);
  }
}
}
