//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const count = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0
  };

  for (let i = 0; i < strand.length; i++) {
    const nucleotide = strand[i];
    if (nucleotide === 'A' || nucleotide === 'C' || nucleotide === 'G' || nucleotide === 'T') {
      count[nucleotide]++;
    } else {
      throw new Error('Invalid nucleotide');
    }
  }

  return count;
}
