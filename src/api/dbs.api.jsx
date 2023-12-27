import axios from "axios";

const getFinalArray = (initialArray) => {
  // in = array directly from the API [{data:[{},{}]},{data:[{},{}]},{data:[{},{}]}]
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

const defaultOptions = {
  baseURL: "http://localhost:8000",
};

const apiInstance = axios.create(defaultOptions);

export const searchByIDName = (searchQuery) => {
  const promGenome = apiInstance.get("genome", {
    params: {
      search: searchQuery,
    },
  });
  const promProtein = apiInstance.get("protein", {
    params: {
      search: searchQuery,
    },
  });

  const searchData = Promise.all([promGenome, promProtein]).then(
    ([genomeResponse, proteinResponse]) => {
      const initialArray = [genomeResponse, proteinResponse];
      const finalArray = getFinalArray(initialArray);
      return finalArray;
    }
  );
  return searchData;
};

export const searchInDB = (searchQuery) => {
  const promGenome = apiInstance.get("genome", {
    params: {
      search: searchQuery,
    },
  });
  const promProtein = apiInstance.get("protein", {
    params: {
      search: searchQuery,
    },
  });
  const promOrthologyGroup = apiInstance.get("orthologygroup", {
    params: {
      search: searchQuery,
    },
  });

  const searchData = Promise.all([promGenome, promProtein, promOrthologyGroup]).then(
    ([genomeResponse, proteinResponse, orthologyGroupResponse]) => {
      const initialArray = [genomeResponse, proteinResponse, orthologyGroupResponse];
      const finalArray = getFinalArray(initialArray);
      return finalArray;
    }
  );
  return searchData;
};

export const getProteome = (genomeID) => {
  const promProteins = apiInstance.get("proteome", {
    params: {
      search: genomeID,
    },
  });
  const searchData = Promise.all([promProteins]).then((proteinResponse) => {
    const proteome = getFinalArray(proteinResponse);
    return proteome;
  });

  return searchData;
};
