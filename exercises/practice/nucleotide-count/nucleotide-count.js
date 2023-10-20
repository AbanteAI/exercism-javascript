//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  let countA = 0;
  let countC = 0;
  let countG = 0;
  let countT = 0;

  for (let i = 0; i < strand.length; i++) {
    const nucleotide = strand[i];
    if (nucleotide === 'A') {
      countA++;
    } else if (nucleotide === 'C') {
      countC++;
    } else if (nucleotide === 'G') {
      countG++;
    } else if (nucleotide === 'T') {
      countT++;
    } else {
      throw new Error('Invalid nucleotide: ' + nucleotide);
    }
  }

  return `${countA} ${countC} ${countG} ${countT}`;
}
