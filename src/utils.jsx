export const getFinalArray = (initialArray) => {
  // in = array directly from the API [{data:[{},{}]},{}]
  // out = array only with the data
  const resultsArray = [];
  for (const value of initialArray) {
    if (value.data.length === 0) {
      continue;
    }
    for (const theData of value.data) {
      resultsArray.push(theData);
    }
  }
  return resultsArray;
};

export const makeFasta = (seqID, seq) => {
  const fastaContent = `>${seqID}\n${seq}`;
  const blob = new Blob([fastaContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "sequence.fasta";
  link.href = url;
  link.click();
};
