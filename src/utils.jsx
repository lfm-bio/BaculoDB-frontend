const downloadTextFile = (seqsArray) => {
  const blob = new Blob(seqsArray, { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "sequence.fasta";
  link.href = url;
  link.click();
};

export const makeFasta = (seqs, orf = false) => {
  const seqsArray = [];
  for (const seq of seqs) {
    if (orf) {
      seqsArray.push(`>${seq.gb_accss}\n${seq.orf_seq}\n`);
    } else {
      seqsArray.push(`>${seq.gb_accss}\n${seq.seq}\n`);
    }
  }
  downloadTextFile(seqsArray);
};

export const makeCsv = (seqs) => {
  const seqsArray = ["ID,Name,Type,Length\n"];
  for (const seq of seqs) {
    seqsArray.push(
      `${seq.id},${seq.name},${seq.entry_type},${seq.seq.length}\n`
    );
  }
  downloadTextFile(seqsArray);
};
