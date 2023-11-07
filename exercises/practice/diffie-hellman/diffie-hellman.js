//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Both p and g should be prime numbers.');
    }
    this.p = p;
    this.g = g;
  }

    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Private key should be greater than 1 and less than p.');
    }
    return this.modPow(this.g, privateKey, this.p);
  }

    if (myPrivateKey <= 1 || myPrivateKey >= this.p) {
      throw new Error('Private key should be greater than 1 and less than p.');
    }
    return this.modPow(theirPublicKey, myPrivateKey, this.p);
  }
}
  isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  modPow(base, exponent, modulus) {
    if (modulus === 1) return 0;
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = exponent >> 1;
      base = (base * base) % modulus;
    }
    return result;
  }
