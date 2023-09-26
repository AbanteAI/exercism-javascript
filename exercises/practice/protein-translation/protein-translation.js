//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  if (!rna) {
    return [];
  }
  const codons = rna.match(/.{1,3}/g);
  if (!codons) {
    throw new Error("Invalid codon");
  }

  for (const codon of codons) {
    switch (codon) {
      case "AUG":
        proteins.push("Methionine");
        break;
      case "UUU":
      case "UUC":
        proteins.push("Phenylalanine");
        break;
      case "UUA":
      case "UUG":
        proteins.push("Leucine");
        break;
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
        proteins.push("Serine");
        break;
      case "UAU":
      case "UAC":
        proteins.push("Tyrosine");
        break;
      case "UGU":
      case "UGC":
        proteins.push("Cysteine");
        break;
      case "UGG":
        proteins.push("Tryptophan");
        break;
      case "UAA":
      case "UAG":
      case "UGA":
        return proteins;
      default:
        throw new Error("Invalid codon");
    }
  }

  return proteins;
};
