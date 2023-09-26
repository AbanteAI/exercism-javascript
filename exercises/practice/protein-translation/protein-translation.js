//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  const codons = rna.match(/.{1,3}/g) || [];
  const proteins = [];

  for (const codon of codons) {
    const protein = getProtein(codon);
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

const getProtein = (codon) => {
  switch (codon) {
    case 'AUG':
      return 'Methionine';
    case 'UUU':
    case 'UUC':
      return 'Phenylalanine';
    case 'UUA':
    case 'UUG':
      return 'Leucine';
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
      return 'Serine';
    case 'UAU':
    case 'UAC':
      return 'Tyrosine';
    case 'UGU':
    case 'UGC':
      return 'Cysteine';
    case 'UGG':
      return 'Tryptophan';
    case 'UAA':
    case 'UAG':
    case 'UGA':
      return 'STOP';
    default:
      return null;
  }
};
