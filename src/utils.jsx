export const getFinalArray = (initialArray) => {
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
