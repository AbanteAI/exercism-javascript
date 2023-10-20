//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rnaSequence = "") => {
  const CODON_PROTEIN_MAP = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP",
  };

  const codons = rnaSequence.match(/.{1,3}/g) || [];
  const proteins = [];

  for (const codon of codons) {
    const protein = CODON_PROTEIN_MAP[codon];

    if (!protein) {
      throw new Error("Invalid codon");
    }

    if (protein === "STOP") {
      break;
    }

    proteins.push(protein);
  }

  return proteins;
};
