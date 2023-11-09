//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const splitIntoCodons = (rna) => {
  const codons = [];
  for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna.slice(i, i + 3));
  }
  return codons;
};

const translateCodon = (codon) => {
  const codonToProtein = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
  };

  if (!codonToProtein.hasOwnProperty(codon)) {
    throw new Error('Invalid codon');
  }

  return codonToProtein[codon];
};

export const translate = (rna = '') => {
  const codons = splitIntoCodons(rna);
  const protein = [];

  for (const codon of codons) {
    const aminoAcid = translateCodon(codon);

    if (aminoAcid === 'STOP') {
      break;
    }

    protein.push(aminoAcid);
  }

  return protein;
};
