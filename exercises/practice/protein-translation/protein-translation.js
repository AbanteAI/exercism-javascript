//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rnaSequence) => {
  if (!rnaSequence) {
    return [];
  }
  
  const codons = rnaSequence.match(/.{1,3}/g);
  const protein = [];

  // Rest of the code remains the same
};
  const codons = rnaSequence.match(/.{1,3}/g);
  const protein = [];

  for (const codon of codons) {
    switch (codon) {
      case "AUG":
        protein.push("Methionine");
        break;
      case "UUU":
      case "UUC":
        protein.push("Phenylalanine");
        break;
      case "UUA":
      case "UUG":
        protein.push("Leucine");
        break;
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
        protein.push("Serine");
        break;
      case "UAU":
      case "UAC":
        protein.push("Tyrosine");
        break;
      case "UGU":
      case "UGC":
        protein.push("Cysteine");
        break;
      case "UGG":
        protein.push("Tryptophan");
        break;
      case "UAA":
      case "UAG":
      case "UGA":
        return protein;
      default:
        throw new Error("Invalid codon");
    }
  }

  return protein;
};
