//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CODON_PROTEIN_MAP = {
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
  'UGA': 'STOP'
};
export const translate = (rna = '') => {
  const proteins = [];
  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);
    const protein = CODON_PROTEIN_MAP[codon];
    if (protein === 'STOP') break;
    if (!protein) throw new Error('Invalid codon');
    proteins.push(protein);
  }
  return proteins;
};
