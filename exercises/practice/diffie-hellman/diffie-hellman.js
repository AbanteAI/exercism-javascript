//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
    constructor(p, g) {
        this.p = p;
        this.g = g;
    }

    getPublicKey(privateKey) {
        return (this.g ** privateKey) % this.p;
    }

    getSecret(theirPublicKey, myPrivateKey) {
        return (theirPublicKey ** myPrivateKey) % this.p;
    }
}
