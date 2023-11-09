//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const counts = { A: 0, C: 0, G: 0, T: 0 };

  for (const nucleotide of strand) {
    if (!counts.hasOwnProperty(nucleotide)) {
      throw new Error('Invalid nucleotide in strand');
    }
    counts[nucleotide]++;
  }

  return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
}
