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

export const calculateMW = (seq) => {
  const weights = {
    A: 89.0932,
    C: 121.1582,
    D: 133.1027,
    E: 147.1293,
    F: 165.1891,
    G: 75.0666,
    H: 155.1546,
    I: 131.1729,
    K: 146.1876,
    L: 131.1729,
    M: 149.2113,
    N: 132.1179,
    O: 255.3134,
    P: 115.1305,
    Q: 146.1445,
    R: 174.201,
    S: 105.0926,
    T: 119.1192,
    U: 168.0532,
    V: 117.1463,
    W: 204.2252,
    Y: 181.1885,
    WATER: 18.010565,
  };

  let mw = 0;
  for (const aa of seq) {
    if (Object.hasOwn(weights, aa)) {
      mw += weights[aa];
    }
  }

  mw -= (seq.length - 1) * weights.WATER;
  return (mw / 1000).toFixed(2); //Da to kDa
};
