const downloadTextFile = (fileName, textFileLines) => {
  const blob = new Blob(textFileLines, { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileName;
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
  downloadTextFile("sequence.fasta", seqsArray);
};

export const makeCsv = (seqs) => {
  const seqsArray = ["ID,Name,Type,Length\n"];
  for (const seq of seqs) {
    seqsArray.push(
      `${seq.id},${seq.name},${seq.entry_type},${seq.seq.length}\n`
    );
  }
  downloadTextFile("ids.csv", seqsArray);
};
