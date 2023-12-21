export const makeFasta = (seqID, seq) => {
  const fastaContent = `>${seqID}\n${seq}`;
  const blob = new Blob([fastaContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "sequence.fasta";
  link.href = url;
  link.click();
};

export const makeMultiFasta = (seqs, protOrOrf) => {
  const seqsArray = [];
  for (const seq of seqs) {
    if (protOrOrf === "prot") {
      seqsArray.push(`>${seq.gb_accss}\n${seq.seq}\n`);
    } else if (protOrOrf === "orf") {
      seqsArray.push(`>${seq.gb_accss}\n${seq.orf_seq}\n`);
    }
  }
  const blob = new Blob(seqsArray, { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "sequence.fasta";
  link.href = url;
  link.click();
};
