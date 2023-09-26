//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  const codons = getRNASequence(rna);
  const protein = translateCodons(codons);
  return protein;
};

const getRNASequence = (rna) => {
  const codonSize = 3;
  const codons = [];
  for (let i = 0; i < rna.length; i += codonSize) {
    codons.push(rna.slice(i, i + codonSize));
  }
  return codons;
};

const translateCodons = (codons) => {
  const codonToProteinMap = {
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

  const protein = [];
  for (let codon of codons) {
    const aminoAcid = codonToProteinMap[codon];
    if (aminoAcid === "STOP") {
      break;
    }
    protein.push(aminoAcid);
  }
  return protein;
};
