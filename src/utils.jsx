export const getFinalArray = (initialArray) => {
  // in = array directly from the API
  // out = array only with the data
  const resultsArray = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i].data.length === 0) {
      continue;
    }
    for (let j = 0; j < initialArray[i].data.length; j++) {
      resultsArray.push(initialArray[i].data[j]);
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
