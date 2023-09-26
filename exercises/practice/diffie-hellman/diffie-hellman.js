//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
constructor(p, g) {
    this.p = p;
    this.g = g;
}
    this.g = g;
}
  }

getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
        throw new Error('Invalid private key');
    }
    return this.g ** privateKey % this.p;
}
        throw new Error('Invalid private key');
    }
    return this.g ** privateKey % this.p;
}
  }

getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
}
}
  }
}
