const VALID_NUCLEOTIDES = ["A", "C", "G", "T"];

export function countNucleotides(strand) {
  const nucleotideCounts = { A: 0, C: 0, G: 0, T: 0 };

  for (const nucleotide of strand) {
    if (!VALID_NUCLEOTIDES.includes(nucleotide)) {
      throw new Error("Invalid nucleotide");
    }

    nucleotideCounts[nucleotide]++;
  }

  return nucleotideCounts;
}
//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
}
