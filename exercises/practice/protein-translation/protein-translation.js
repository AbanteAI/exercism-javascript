//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CODON_TO_PROTEIN = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
  'UUA': 'Leucine', 'UUG': 'Leucine',
  'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
  'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
  'UGU': 'Cysteine', 'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP'
};

export const translate = (rnaSequence = '') => {
  const proteins = [];
  for (let i = 0; i < rnaSequence.length; i += 3) {
    const codon = rnaSequence.substring(i, i + 3);
    const protein = CODON_TO_PROTEIN[codon];
    if (!protein) {
      throw new Error('Invalid codon');
    }
    if (protein === 'STOP') {
      break;
    }
    proteins.push(protein);
  }
  return proteins;
};
