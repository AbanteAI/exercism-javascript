//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaStrand) => {
  let rnaStrand = '';
  for (let i = 0; i < dnaStrand.length; i++) {
    const nucleotide = dnaStrand[i];
    switch (nucleotide) {
      case 'G':
        rnaStrand += 'C';
        break;
      case 'C':
        rnaStrand += 'G';
        break;
      case 'T':
        rnaStrand += 'A';
        break;
      case 'A':
        rnaStrand += 'U';
        break;
    }
  }
  return rnaStrand;
};
