//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const nucleotideCounts = { A: 0, C: 0, G: 0, T: 0 };

  for (const nucleotide of strand) {
    if (nucleotide in nucleotideCounts) {
      nucleotideCounts[nucleotide]++;
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }

  return `${nucleotideCounts.A} ${nucleotideCounts.C} ${nucleotideCounts.G} ${nucleotideCounts.T}`;
}
}
