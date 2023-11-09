//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    this.p = p;
    if (p <= 0 || g <= 0) {
      throw new Error('Constructor arguments must be greater than 0');
    }
    this.g = g;
  }

  getPublicKey(privateKey) {
    return (this.g ** privateKey) % this.p;
    if (privateKey <= 0 || privateKey >= this.p) {
      throw new Error('Private key must be greater than 0 and less than p');
    }
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }
}
