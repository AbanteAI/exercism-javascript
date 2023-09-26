//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p)) {
      throw new Error('p is not a prime number');
    }
    this.p = p;
    this.g = g;
  }

  isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return BigInt(this.g) ** BigInt(privateKey) % BigInt(this.p);
  }
  }

  getSecret(theirPublicKey, myPrivateKey) {
    if (myPrivateKey <= 1 || myPrivateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return BigInt(theirPublicKey) ** BigInt(myPrivateKey) % BigInt(this.p);
  }
}
}
