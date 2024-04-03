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

export const mainSearch = (searchQuery) => {
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

export const getEntry = (searchQuery) => {
  const promGenome = apiInstance.get("getgenome", {
    params: {
      search: searchQuery,
    },
  });
  const promProtein = apiInstance.get("getprotein", {
    params: {
      search: searchQuery,
    },
  });
  const promNcrna = apiInstance.get("ncrna", {
    params: {
      search: searchQuery,
    },
  });
  const promOrthologyGroup = apiInstance.get("orthologygroup", {
    params: {
      search: searchQuery,
    },
  });

  const searchData = Promise.all([
    promGenome,
    promProtein,
    promNcrna,
    promOrthologyGroup,
  ]).then(
    ([
      genomeResponse,
      proteinResponse,
      ncrnaResponse,
      orthologygroupResponse,
    ]) => {
      const initialArray = [
        genomeResponse,
        proteinResponse,
        ncrnaResponse,
        orthologygroupResponse,
      ];
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

export const getGenomeBatch = (genus) => {
  let url = "";
  if (genus === "A") {
    url = "genomebatchalpha";
  } else {
    url = "genomebatch";
  }
  genus = genus === "baculoviridae" ? "" : genus; // get all entries
  const promGenomes = apiInstance.get(url, {
    params: {
      search: genus,
    },
  });
  const searchData = Promise.all([promGenomes]).then((genomeResponse) => {
    const genomes = getFinalArray(genomeResponse);
    return genomes;
  });
  return searchData;
};

export const getProteinBatch = (genus) => {
  let url = "";
  if (genus === "A") {
    url = "proteinbatchalpha";
  } else {
    url = "proteinbatch";
  }
  genus = genus === "baculoviridae" ? "" : genus; // get all entries
  const promProteins = apiInstance.get(url, {
    params: {
      search: genus,
    },
  });
  const searchData = Promise.all([promProteins]).then((proteinResponse) => {
    const proteins = getFinalArray(proteinResponse);
    return proteins;
  });
  return searchData;
};

export const getBaculoviridaeTable = () => {
  const promBaculoviridae = apiInstance.get("baculoviridae", {});
  const searchData = Promise.all([promBaculoviridae]).then(
    (baculoviridaeResponse) => {
      const proteome = getFinalArray(baculoviridaeResponse);
      return proteome;
    }
  );

  return searchData;
};

export const getOrthologyGroup = (groupName) => {
  const promOrthologyGroup = apiInstance.get("orthologygroup", {
    params: {
      search: groupName,
    },
  });
  const searchData = Promise.all([promOrthologyGroup]).then(
    (orthologygroupResponse) => {
      const orthologyGroup = getFinalArray(orthologygroupResponse);
      return orthologyGroup;
    }
  );
  return searchData;
};

export const getNcrna = (id) => {
  const promNcrna = apiInstance.get("ncrna", {
    params: {
      search: id,
    },
  });
  const searchData = Promise.all([promNcrna]).then((ncrnaResponse) => {
    const ncrna = getFinalArray(ncrnaResponse);
    return ncrna;
  });
  return searchData;
};
