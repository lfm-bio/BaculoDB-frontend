export const makeFasta = (seqs, orf = false) => {
  const seqsArray = [];
  for (const seq of seqs) {
    if (orf) {
      seqsArray.push(`>${seq.gb_accss}\n${seq.orf_seq}\n`);
    } else {
      seqsArray.push(`>${seq.gb_accss}\n${seq.seq}\n`);
    }
  }
  const blob = new Blob(seqsArray, { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "sequence.fasta";
  link.href = url;
  link.click();
};
